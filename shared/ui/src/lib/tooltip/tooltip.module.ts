import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LmBaseModule } from '../base/base.module';
import { TomoruTooltipComponent} from './components/tooltip/tooltip.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { TomoruTooltipDirective } from './directives/tooltip.directive';

@NgModule({
    declarations: [
        TomoruTooltipComponent,
        TomoruTooltipDirective,
    ],
    imports: [
        CommonModule,
        OverlayModule,
        PortalModule,
        LmBaseModule,
    ],
    exports: [
        TomoruTooltipComponent,
        TomoruTooltipDirective,
    ]
})
export class TomoruTooltipModule {
}
