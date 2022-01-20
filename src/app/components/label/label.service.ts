import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LabelService {

  constructor(private http: HttpClient) { }

  get(): Observable<any> {

    let body = {
      query: `query {
      etiquetas{
       NOMBRE
      DESCRIPCION
       LABEL  
      }
     }`};
     
     let headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.http.post('https://apoloniabackend.azurewebsites.net/api', body, { headers: headers});
     
  }

  getMediosPago(): Observable<any> {

    let body = {
      query: `query {
        tipospagos{ 
                  id, 
                  nombre
                }   
        }`};
     
     let headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.http.post('https://apoloniabackend.azurewebsites.net/api', body, { headers: headers});
     
  }
}
