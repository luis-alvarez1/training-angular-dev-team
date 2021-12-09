import { RouterModule, Routes } from '@angular/router';
import { MascotasComponent } from './mascotas/mascotas.component';
import { HomeComponent } from './spa/componentes/home/home.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'mascotas', component: MascotasComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING =  RouterModule.forRoot(APP_ROUTES, {useHash:true});