import { Usuario } from 'src/app/model/usuario';
import { AppEndPoints } from './../endpoints.component';
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams} from "@angular/common/http"




@Injectable({
  providedIn: 'root'
})

export class DatosService{

  public usuarioConectado = new Usuario(); //Creo objeto tipo usuario

  constructor() {

  }

      introducirDatos(name:string,email:string,password:string){  //guardo los datos del usuario
          this.usuarioConectado.name=name;
          this.usuarioConectado.email=email;
          this.usuarioConectado.password=password;
      }

	
      datosUsuarioConectado(){	//devuelvo el usuario
          return this.usuarioConectado;
      }


    }