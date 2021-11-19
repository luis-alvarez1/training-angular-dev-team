import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { AppComponent } from './app.component';
import { Prueba1Component } from './prueba1/prueba1.component';
import { HomeComponent } from './spa/componentes/home/home.component';
import { SpaComponent } from './spa/spa.component';
import { NavbarComponent } from './spa/componentes/navbar/navbar.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { CuentaComponent } from './cuenta/cuenta.component';
import {MatIconModule} from '@angular/material/icon';
import { InfoCuentaService } from './cuenta/info-cuenta.service';
import { MatMenuModule} from '@angular/material/menu';
//RUTAS
import { APP_ROUTING } from './app.routes';

//SERVICIOS
import { HeroesService } from './servicios/heroes.service'



import {MatToolbarModule} from '@angular/material/toolbar';
import { HeroesComponent } from './spa/componentes/heroes/heroes.component';
import { PersonaArrayComponent } from './persona-array/persona-array.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    Prueba1Component,
    SpaComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    PersonaArrayComponent,
    CuentaComponent
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
    MatMenuModule
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
    MatMenuModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [InfoCuentaService,HeroesService],
  
  bootstrap: [AppComponent]
})
export class AppModule { 

}

