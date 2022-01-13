import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtiquetaService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.post('https://apoloniabackend.azurewebsites.net/api?query=%7B%0A%20%20etiquetas%20%7B%0A%20%20%20%20NOMBRE%0A%20%20%20%20DESCRIPCION%0A%20%20%20%20LABEL%0A%20%20%7D%0A%7D%0A', {

      query: `
        query{
          etiquetas {
            NOMBRE
            DESCRIPCION
            LABEL
          }
        }`
    }, { headers: new HttpHeaders().set("Content-Type", "aplication/json") }
    )
  }
}