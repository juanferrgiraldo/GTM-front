import { BrowserModule } from '@angular/platform-browser';
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

import { AppRoutingModule } from './app-routing.module';
import { TestModule } from './test/test.module';
// import { PublicationModule } from './publishing/publication.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { AuthService } from './auth/auth.service';
import { PublicationsComponent } from './publishing/publications/publications.component';
import { PublicateComponent } from './publishing/publicate/publicate.component';
import { PublicationService } from './publishing/publication.service';
import { TestComponent } from './test/test.component';

import { FiresigninComponent } from './fireauth/firesignin/firesignin.component';
import { FiresignupComponent } from './fireauth/firesignup/firesignup.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftComponent,
    RightComponent,
    SignupComponent,
    SigninComponent,
    PublicationsComponent,
    PublicateComponent,
    LogoutComponent,
    TestComponent,
    FiresigninComponent,
    FiresignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    TestModule
  ],
  providers: [AuthService, PublicationService], // Works like a singleton, only one instance for all app.
  bootstrap: [AppComponent]
})
export class AppModule { }
