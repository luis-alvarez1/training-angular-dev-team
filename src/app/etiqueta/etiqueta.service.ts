import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtiquetaService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
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
}