import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PluginModule } from '@plugin';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LIGHT_POINT_COMMON_CONFIG, LightPointCommonModule } from 'lp-common';

import { ApiPrefixInterceptor } from './core/api.interceptor';
import { CustomTilesProvider } from './core/tiles.provider';
import { PLAYGROUND_SETTINGS } from '../../config';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    PluginModule,
    LightPointCommonModule.forRoot(CustomTilesProvider),
    
  ],
  providers: [
    {
      provide: LIGHT_POINT_COMMON_CONFIG,
      useValue: PLAYGROUND_SETTINGS.config
    },
    { provide: HTTP_INTERCEPTORS, useClass: ApiPrefixInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
