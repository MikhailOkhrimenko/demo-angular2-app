import {Routes} from '@angular/router';
import {LoginComponent} from './auth/login/login.component';

export const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: '**', component: LoginComponent},
];
