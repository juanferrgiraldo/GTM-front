import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { PublicationsComponent } from './publishing/publications/publications.component';
import { PublicateComponent } from './publishing/publicate/publicate.component';
import { TestComponent } from './test/test.component';
import { TilesComponent } from './test/tiles/tiles.component';

import { FiresignupComponent } from './fireauth/firesignup/firesignup.component';
import { FiresigninComponent } from './fireauth/firesignin/firesignin.component';


const appRoutes: Routes = [
    // { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'publications', component: PublicationsComponent },
    { path: 'publicate', component: PublicateComponent },
    { path: 'test', component: TestComponent },
    { path: 'test/tiles', component: TilesComponent },

    { path: 'firesignup', component: FiresignupComponent },
    { path: 'firesignin', component: FiresigninComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {

  }
