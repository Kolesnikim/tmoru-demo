import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {LmBaseModule} from "../../shared/ui/src/lib/base/base.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {OverlayModule} from "@angular/cdk/overlay";
import {TomoruTooltipModule} from "../../shared/ui/src/lib/tooltip/tooltip.module";


@NgModule({
  declarations: [AppComponent],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      LmBaseModule,
      TomoruTooltipModule,
      OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
