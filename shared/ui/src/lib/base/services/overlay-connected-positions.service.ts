import { Injectable } from '@angular/core';

import { ConnectedPosition, FlexibleConnectedPositionStrategy, Overlay } from '@angular/cdk/overlay';

import { TConnectedPositions } from "../base.types";

@Injectable()
export class OverlayConnectedPositionsService {

    constructor(
        private overlay: Overlay
    ) {}

    public getPositionStrategy(
        origin: HTMLElement,
        position: TConnectedPositions,
        offset = 0
    ): FlexibleConnectedPositionStrategy {
        const positionStrategy = this.overlay.position().flexibleConnectedTo(origin);

        switch(position) {
            case 'right':
                positionStrategy
                    .withPositions([this.rightCenterPosition(offset), this.leftCenterPosition(offset)]);
                break;
            case 'left':
                positionStrategy
                    .withPositions([this.leftCenterPosition(offset), this.rightCenterPosition(offset)]);
                break;
            case 'bottom':
                positionStrategy
                    .withPositions([this.bottomCenterPosition(offset), this.topCenterPosition(offset)]);
                break;
            case 'top':
            default:
                positionStrategy
                    .withPositions([this.topCenterPosition(offset), this.bottomCenterPosition(offset)]);
        }

        return positionStrategy;
    }

    private rightCenterPosition(offset: number): ConnectedPosition {
        return {
            originX: 'end',
            originY: 'center',
            overlayX: 'start',
            overlayY: 'center',
            offsetX: offset,
        };
    }

    private leftCenterPosition(offset: number): ConnectedPosition {
        return {
            originX: 'start',
            originY: 'center',
            overlayX: 'end',
            overlayY: 'center',
            offsetX: -offset
        };
    }

    private bottomCenterPosition(offset: number): ConnectedPosition {
        return {
            originX: 'center',
            originY: 'bottom',
            overlayX: 'center',
            overlayY: 'top',
            offsetY: offset
        };
    }

    private topCenterPosition(offset: number): ConnectedPosition {
        return {
            originX: 'center',
            originY: 'top',
            overlayX: 'center',
            overlayY: 'bottom',
            offsetY: -offset
        };
    }
}
