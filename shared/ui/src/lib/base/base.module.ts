import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverlayModule } from "@angular/cdk/overlay";

import { OverlayConnectedPositionsService } from './services/overlay-connected-positions.service';


@NgModule({
    imports: [
        CommonModule,
        OverlayModule
    ],
    providers: [
        OverlayConnectedPositionsService,
    ]
})
export class LmBaseModule {
}
