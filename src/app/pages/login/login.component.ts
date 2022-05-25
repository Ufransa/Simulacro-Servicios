import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Form
  public registroForm: FormGroup;

  //Boleana
  public submitted:Boolean = false;

//Boleana
public usuarioIncorrecto:Boolean=false;

constructor(private router:Router, private formBuilder: FormBuilder, private loginService:LoginService) {

  this.registroForm = this.formBuilder.group({
    password: ['', Validators.required],
    email:['', [Validators.required, Validators.email]]
  });

}


  ngOnInit(): void {
  }

  onSubmit(){
    this.submitted=true

    if (this.registroForm.valid) {

      this.loginService.login(
        this.registroForm.value.email,
        this.registroForm.value.password
      ).subscribe(login => {

        console.log('Inicio sesion ' + JSON.stringify(login));
        this.router.navigate(['/login']);

      },(error:any) => {
        this.usuarioIncorrecto=true
      });

    }
  }


  get f(){
    return this.registroForm.controls;
  }

  public goToRegistro(): void{
    this.router.navigate(['/registro']);
  }

}
