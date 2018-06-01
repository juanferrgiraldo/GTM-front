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

@NgModule({
    declarations: [
        Http1Component,
        Http2Component
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
        Http2Component
    ],
    providers: [],
    bootstrap: []
})

export class TestModule { }

