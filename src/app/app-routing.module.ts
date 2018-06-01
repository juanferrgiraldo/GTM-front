import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { PublicationsComponent } from './publishing/publications/publications.component';
import { PublicacionesComponent } from './publishing/publicaciones/publicaciones.component';
import { PublicateComponent } from './publishing/publicate/publicate.component';
import { TestComponent } from './test/test.component';

const appRoutes: Routes = [
    // { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'publications', component: PublicationsComponent },
    { path: 'publicaciones', component: PublicacionesComponent },
    { path: 'publicate', component: PublicateComponent },
    { path: 'test', component: TestComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {

  }
