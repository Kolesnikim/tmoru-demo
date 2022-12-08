import {
    Directive,
    HostListener,
    ComponentRef,
    Input,
    TemplateRef,
    OnDestroy,
    ViewContainerRef,
    OnChanges,
    SimpleChanges
} from '@angular/core';

import { ComponentPortal } from '@angular/cdk/portal';

import { TTooltipPosition, TTooltipViewMode } from '../tooltip.types';
import { IOverlayParams, TooltipService } from '../tooltip.service';
import { TomoruTooltipComponent } from "../components/tooltip/tooltip.component";
import {NgIfContext} from "@angular/common";

@Directive({
    selector: '[tomoruTooltip]',
    providers: [TooltipService]
})
export class TomoruTooltipDirective implements OnChanges, OnDestroy {
    @Input() tomoruTooltip = '';
    @Input() tooltipPosition: TTooltipPosition = 'top';
    @Input() tooltipManualActive = false;
    @Input() tooltipTemplate: TemplateRef<NgIfContext<boolean>> | null = null;
    @Input() tooltipTemplateData: object | null = null;
    @Input() tooltipWidth = 'auto';
    @Input() tooltipOffset = 10;
    @Input() tooltipMode: TTooltipViewMode = 'dark';

    private tooltipRef?: ComponentRef<TomoruTooltipComponent>;

    constructor(
        private viewContainerRef: ViewContainerRef,
        private tooltipService: TooltipService,
    ) {
    }

    ngOnChanges(changes: SimpleChanges) {
        changes['tooltipManualActive']?.currentValue ? this.show() : this.hide()
    }

    @HostListener('mouseenter')
    show(): void {
        if (
            (!this.tomoruTooltip && !this.tooltipTemplate)
            || this.tooltipService.hasAttached()
        ) {
            return;
        }

        const portal = new ComponentPortal(TomoruTooltipComponent);
        const params: IOverlayParams = {
            origin: this.viewContainerRef.element.nativeElement,
            content: portal,
            position: this.tooltipPosition,
            height: 'auto',
            width: this.tooltipWidth,
            offset: this.tooltipOffset
        };


        this.tooltipRef = this.tooltipService.open<TomoruTooltipComponent>(params);
        this.tooltipRef.instance.text = this.tomoruTooltip;

        this.tooltipRef.instance.tooltipTemplate = this.tooltipTemplate as TemplateRef<NgIfContext<boolean>>;
        this.tooltipRef.instance.tooltipTemplateData = this.tooltipTemplateData as object;

        this.tooltipRef.instance.mode = this.tooltipMode;
        this.tooltipRef.instance.width = this.tooltipWidth;
    }

    @HostListener('mouseleave')
    hide(): void {
        if (!this.tooltipManualActive) this.tooltipService.close()
    }

    ngOnDestroy(): void {
        if (this.tooltipRef) {
            this.tooltipService.close();
        }
    }
}
