import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { AppComponent } from './app.component';
import { Prueba1Component } from './prueba1/prueba1.component';
import { HomeComponent } from './spa/componentes/home/home.component';
import { SpaComponent } from './spa/spa.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { CartaComponent } from './carta/carta.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';

//RUTAS
import { APP_ROUTING } from './app.routes';

//SERVICIOS
import { HeroesService } from './servicios/heroes.service'
import { MascotasService } from './mascotas/mascotas.service'

import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeroesComponent } from './spa/componentes/heroes/heroes.component';
import { PersonaArrayComponent } from './persona-array/persona-array.component';
import { AppRoutingModule } from './app-routing.module';
import { InputCompComponent } from './input-comp/input-comp.component';


import {CarrosComponent} from './carros/carros.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { NumericoComponent } from './numerico/numerico.component';
import { SelectComponent } from './select/select.component';
import { AdminPacientesComponent } from './admin-pacientes/admin-pacientes.component';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';
import { PacientesService } from './admin-pacientes/pacientes.service';
import { PaginaFormularioComponent } from './pagina-formulario/pagina-formulario.component';
import { FormularioSaidComponent } from './components/formulario/formulario-said/formulario-said.component';
import { PdfSaidComponent } from './components/pdf-said/pdf-said.component';
import { PdfGiancarloComponent } from './pdf-giancarlo/pdf-giancarlo.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    Prueba1Component,
    SpaComponent,
    HomeComponent,
    HeroesComponent,
    PersonaArrayComponent,
    CartaComponent,
    CarrosComponent,
    MascotasComponent,
    ToolbarComponent,
    CuentaComponent,
    NumericoComponent,
    SelectComponent,
    InputCompComponent,
    ListaPacientesComponent,
    AdminPacientesComponent,
    PaginaFormularioComponent,
    FormularioSaidComponent,
    PdfSaidComponent,
    PdfGiancarloComponent
  ],
  
  imports: [
    APP_ROUTING,
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatMenuModule,
    MatSelectModule
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSelectModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
    providers: [HeroesService,MascotasService,PacientesService],
  bootstrap: [AppComponent]
})
export class AppModule { 

}

