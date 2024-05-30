import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {
@Output()ocultarDatos:boolean = false;
dateInicioSesion: string = '';
ngOnInit(){
  let date = new Date();
  this.dateInicioSesion = date.toLocaleString();
  //console.log(this.dateInicioSesion);
}


  activar():void{
    this.ocultarDatos = true;
  }


}
