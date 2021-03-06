import { RouterModule, Routes } from '@angular/router';
import { FormularioSaidComponent } from './components/formulario/formulario-said/formulario-said.component';
import { PdfSaidComponent } from './components/pdf-said/pdf-said.component';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import { PaginaFormularioComponent } from './pagina-formulario/pagina-formulario.component';
import { HomeComponent } from './spa/componentes/home/home.component';
import { PdfGiancarloComponent } from './pdf-giancarlo/pdf-giancarlo.component';
import { EtiquetaComponent } from './etiqueta/etiqueta.component';
import { LabelComponent } from './components/label/label.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'mascotas', component: MascotasComponent},
    {path: 'pacientes', component: ListaPacientesComponent},
    {path: 'formulario', component: PaginaFormularioComponent},
    {path: 'reciboPago', component: PdfGiancarloComponent},
    {path: 'formularioSaid', component: FormularioSaidComponent},
    {path: 'reciboSaid', component: PdfSaidComponent},
    {path: 'etiqueta', component: EtiquetaComponent},
    {path: 'requestSaid', component: LabelComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}   
    
];

export const APP_ROUTING =  RouterModule.forRoot(APP_ROUTES, {useHash:true});