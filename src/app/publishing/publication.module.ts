import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule
  } from '@angular/material';

import { PublicationsComponent } from './publications/publications.component';
import { PublicateComponent } from './publicate/publicate.component';


@NgModule({
    declarations: [
        PublicationsComponent,
        PublicateComponent,
    ],
    imports: [
        HttpModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule
    ]
})
export class PublicationModule {}
