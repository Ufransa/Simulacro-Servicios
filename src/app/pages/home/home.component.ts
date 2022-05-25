import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public nombre:string;

  constructor(private datosService:DatosService) {
    this.nombre=datosService.datosUsuarioConectado().name;
   }

  ngOnInit(): void {
  }

}
