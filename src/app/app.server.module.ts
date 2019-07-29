import {NgModule} from '@angular/core';

import {ServerModule, ServerTransferStateModule} from '@angular/platform-server';
import {ModuleMapLoaderModule} from '@nguniversal/module-map-ngfactory-loader';
import {RouterModule} from '@angular/router';
import { LazyModule } from './lazy/lazy.module';

import {AppComponent} from './app.component';

@NgModule({
  imports: [
    ServerModule,
    RouterModule,
    LazyModule,
    ModuleMapLoaderModule,
    ServerTransferStateModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
