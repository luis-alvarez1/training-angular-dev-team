import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoCuentaService {
userSER: any[] = [
  {
    userS:'admin',
    passwordS: '1234'
  }
]

  constructor() { }
 getArray(){
   return this.userSER;
 }
}
