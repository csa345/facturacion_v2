import { Component } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


export interface usuario{
  nombre : string
  apellido : string
  correo : string | number | any
  contraseña: string | number | any
  telefono : number
  direccion : string | number | any
}


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {

  
  formularioUsuario: FormGroup;

  constructor( private fb: FormBuilder,
               
              //  private router : Router
              /* formRegusuario: FormControl */ ){


    this.formularioUsuario = this.fb.group({
      nombre: new FormControl("",[Validators.required]),
      apellido: new FormControl("",[Validators.required]),
      correo: new FormControl("",[Validators.required, Validators.email]),
      contraseña: new FormControl("",[Validators.required]),
      direccion: new FormControl("",[Validators.required]),
      telefono: new FormControl("",[Validators.required])
    })


  }



   agregarUsuario(){}

}
