import { NgModule } from '@angular/core';

import { LightPointCommonModule } from 'lp-common';
import { ChartsModule } from 'ng2-charts';

import { BarchartComponent } from './barchart/barchart.component';
import {SignalRService} from './services/signal-r.service';
const tiles = [BarchartComponent];

@NgModule({
  imports: [
    LightPointCommonModule,ChartsModule
  ],
  declarations: [...tiles,],
  exports: [...tiles],
  entryComponents: [...tiles]
})
export class PluginModule {
  static tiles = {
    'barchart-signalR': BarchartComponent
  }
}
