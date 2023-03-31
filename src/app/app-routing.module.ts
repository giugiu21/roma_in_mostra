import { MostreComponent } from './components/mostre/mostre.component';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/mostre/detail/detail.component';
import { ListaMostreComponent } from './components/mostre/lista-mostre/lista-mostre.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path: '', redirectTo: 'home', pathMatch: 'full'},
{path: 'home', component: HomeComponent},
{path: 'mostre', component: MostreComponent, children: [
  {path:'dettaglio/:title/:_id', component: DetailComponent},
  {path: '', pathMatch: 'full', component: ListaMostreComponent},
]},
{path: 'registrati', component: RegistrationComponent},
{path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
