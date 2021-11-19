import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoCuentaService {

  public userS: string = 'admin';
  public passwordS: string = '1234';

  constructor() { }
  getUserS() {
    return this.userS;
  }

  getPasswordS() {
    return this.passwordS;
  }

  validarUsuario(username:String, password:String ): Boolean { 
    return (this.userS == username &&  this.passwordS == password)
  }

}
