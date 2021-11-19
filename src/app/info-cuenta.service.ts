import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CuentaComponent } from './cuenta/cuenta.component';

@Injectable({
  providedIn: 'root'
})
export class InfoCuentaService {

  
    public userS: string = 'admin';
    public passwordS: string =  '1234';


  constructor(private componente: CuentaComponent) { }
 getUserS(){
   return this.userS;
 }

 getPasswordS(){
   return this.passwordS;
 }

 validarUsuario(){
  if(this.componente.formulario === ){

  }
 }

}
