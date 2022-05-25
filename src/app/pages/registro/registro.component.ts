import { Router } from '@angular/router';
import { RegistroService } from './../../servicios/registro.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

    //Booleanas
    public validatePassword=false;
    public submitted=false;
  
    //Form
    public registroForm: FormGroup;

    constructor(private formBuilder: FormBuilder, 
      private registroService:RegistroService,
      private router:Router,
      private datosService:DatosService) {
      this.validatePassword=false;
  
  
      this.registroForm = this.formBuilder.group({
        name: ['', [Validators.required]],
        password: ['', Validators.required],
        contrasenarepe: ['', Validators.required],
        email:['', [Validators.required, Validators.email]]
      });
  }

  ngOnInit(): void {
  }

  onSubmit():void{
    this.submitted=true

    if (this.registroForm.value.password != this.registroForm.value.contrasenarepe) {

        this.validatePassword=true;

    }else if(this.registroForm.value.password == this.registroForm.value.contrasenarepe && this.registroForm.valid){

        this.validatePassword=false

        this.registroService.registro(

          this.registroForm.value.name,
          this.registroForm.value.email,
          this.registroForm.value.password

        ).subscribe(login => {

          this.datosService.introducirDatos( 
            this.registroForm.value.name,
            this.registroForm.value.email,
            this.registroForm.value.password
          );

          console.log('Inicio sesion ' + JSON.stringify(login));

          this.router.navigate(['/login']);

        });


    }

  }

  get f() {
    return this.registroForm.controls;
  }

}
