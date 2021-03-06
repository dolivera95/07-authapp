import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {PreciosComponent} from './components/precios/precios.component';
import {ProtegidoComponent} from './components/protegido/protegido.component';
import {AuthGuardService} from './services/auth-guard.service';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'precios', component: PreciosComponent },
  {
    path: 'protegido',
    component: ProtegidoComponent,
    canActivate: [
      AuthGuardService      
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
