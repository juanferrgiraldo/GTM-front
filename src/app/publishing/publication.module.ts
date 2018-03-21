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

import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { PublicationsComponent } from './publications/publications.component';
import { PublicateComponent } from './publicate/publicate.component';
import { Publicaciones1Component } from './publicaciones/publicaciones1/publicaciones1.component';
import { Publicaciones2Component } from './publicaciones/publicaciones2/publicaciones2.component';


@NgModule({
    declarations: [
        PublicacionesComponent,
        PublicationsComponent,
        PublicateComponent,
        Publicaciones2Component,
        Publicaciones1Component
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
