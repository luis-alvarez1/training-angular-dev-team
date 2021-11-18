import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-persona-array',
  templateUrl: './persona-array.component.html',
  styleUrls: ['./persona-array.component.css']
})
export class PersonaArrayComponent implements OnInit {
  
  usuarioForm = new FormGroup({
    nombre: new FormControl(''),
    edad: new FormControl(0),
    salario: new FormControl(0)
  })

  usuario : Array <any> = []

  salarioMayor(){
    let compare = 0;
    this.usuario.forEach(u => {
        if(u.salario > compare){
          compare = u.salario
        }
      });
      console.log(compare)
      return compare
    }

    salarioMenor(){
      let compare = Number.MAX_SAFE_INTEGER;
      this.usuario.forEach(u => {
          if(u.salario <  compare){
            compare = u.salario
          }
        });
        console.log(compare)
        return compare
      }

  promedioEdad(){
    let suma = 0; 
    this.usuario.forEach(u => {
      suma += u.edad
      
    });
    return suma/this.usuario.length
  }

  promedioSalario(){
    let suma = 0; 
    this.usuario.forEach(u => {
      suma += u.salario
      
    });
    return suma/this.usuario.length
  }


  constructor() { 
  }

  ngOnInit(): void {
    
  }

  registrar(){
    this.usuario.push(this.usuarioForm.value)
    console.log(this.usuario)  

    if(this.usuario.length>1){
      Swal.fire(
        'PROMEDIOS',
        'El promedio de los salarios es ' + this.promedioSalario() + "\ny el promedio de las edades es "+ this.promedioEdad().toString() + "\n. El salario más alto es " + this.salarioMayor() + "\ny el salario más bajo es " + this.salarioMenor(),
        "info"

      )

    }
  }






}
