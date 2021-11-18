import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './spa/componentes/heroes/heroes.component';
import { HomeComponent } from './spa/componentes/home/home.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'heroes', component: HeroesComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING =  RouterModule.forRoot(APP_ROUTES, {useHash:true});