import {
    Component,
    OnInit,
    Input,
    ViewChild,
    ElementRef,
    ChangeDetectionStrategy,
    TemplateRef,
    HostBinding,
} from '@angular/core';
import { NgIfContext } from "@angular/common";
import { trigger, transition } from '@angular/animations';

import { animationFadeIn } from '../../../helpers/helpers.animation';
import { TTooltipViewMode } from '../../tooltip.types';


@Component({
    selector: 'tomoru-demo-tooltip',
    templateUrl: './tooltip.component.html',
    styleUrls: ['./tooltip.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('tooltipInOut', [
            transition(':enter', animationFadeIn(0.2)),
        ])
    ]
})
export class TomoruTooltipComponent implements OnInit {
    @HostBinding('style.width') tooltipWidth!: string;
    @ViewChild('tooltip', { static: false }) tooltip!: ElementRef;

    @Input() text = '';
    @Input() tooltipTemplate: TemplateRef<NgIfContext<boolean>>;
    @Input() tooltipTemplateData: object;
    @Input() mode: TTooltipViewMode = 'dark';
    @Input() width = '100px';

    constructor() { }

    ngOnInit(): void {
        this.tooltipWidth = this.width;
    }
}
