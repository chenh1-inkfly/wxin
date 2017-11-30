/**
 * Created by wangdi on 26/5/17.
 */
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './dashboard/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { RootComponent } from './dashboard/root/root.component';



const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'dashboard', component: RootComponent, children: [
    {path: '', component: HomeComponent},
  ]}
];

export const routing = RouterModule.forRoot(routes);

