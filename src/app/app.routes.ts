import { RouterModule, Routes } from '@angular/router';
import { FormularioSaidComponent } from './components/formulario/formulario-said/formulario-said.component';
import { PdfSaidComponent } from './components/pdf-said/pdf-said.component';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import { PaginaFormularioComponent } from './pagina-formulario/pagina-formulario.component';
import { HomeComponent } from './spa/componentes/home/home.component';



const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'mascotas', component: MascotasComponent},
    {path: 'pacientes', component: ListaPacientesComponent},
    {path: 'formulario', component: PaginaFormularioComponent},
    {path: 'formularioSaid', component: FormularioSaidComponent},
    {path: 'reciboSaid', component: PdfSaidComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
    
    
];

export const APP_ROUTING =  RouterModule.forRoot(APP_ROUTES, {useHash:true});