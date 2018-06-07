import { CommonModule } from '@angular/common'; // change browserModule by CommonMmodule
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule
} from '@angular/material';

import { Http1Component } from './http1/http1.component';
import { Http2Component } from './http2/http2.component';
import { TilesComponent } from './tiles/tiles.component';
import { Thttp1Component } from './tiles/thttp1/thttp1.component';
import { Thttp2Component } from './tiles/thttp2/thttp2.component';

@NgModule({
    declarations: [
        Http1Component,
        Http2Component,
        TilesComponent,
        Thttp1Component,
        Thttp2Component
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule
    ],
    exports: [
        Http1Component,
        Http2Component,
        Thttp1Component,
        Thttp2Component
    ],
    providers: [],
    bootstrap: []
})

export class TestModule { }

