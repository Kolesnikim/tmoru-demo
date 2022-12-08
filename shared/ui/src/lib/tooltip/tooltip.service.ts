import { Injectable, ComponentRef } from '@angular/core';

import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { Portal } from '@angular/cdk/portal';

import { OverlayConnectedPositionsService } from '../base/services/overlay-connected-positions.service';
import { TTooltipPosition } from './tooltip.types';

export interface IOverlayParams {
    origin: HTMLElement;
    position: TTooltipPosition;
    content: Portal<any>;
    width?: string | number;
    minWidth?: string | number;
    maxWidth?: string | number;
    height?: string | number;
    offset?: number;
}

@Injectable()
export class TooltipService {
    overlayRef: OverlayRef;

    constructor(
        private overlay: Overlay,
        private positionsService: OverlayConnectedPositionsService
    ) { }

    open<T>(params: IOverlayParams): ComponentRef<T> {
        this.overlayRef = this.overlay.create(
            this.getOverlayConfig(params)
        );

        return this.overlayRef.attach(params.content);
    }

    close(): void {
        if (this.overlayRef) {
            this.overlayRef.detach();
        }
    }

    hasAttached(): boolean {
        return this.overlayRef?.hasAttached() === true
    }

    private getOverlayConfig({
                                 origin,
                                 width,
                                 height,
                                 minWidth,
                                 maxWidth,
                                 position,
                                 offset,
                             }: IOverlayParams): OverlayConfig {
        return new OverlayConfig({
            width,
            minWidth,
            maxWidth,
            height,
            hasBackdrop: false,
            positionStrategy: this.positionsService.getPositionStrategy(origin, position, offset).withFlexibleDimensions(false),
            scrollStrategy: this.overlay.scrollStrategies.close(),
        });
    }
}
