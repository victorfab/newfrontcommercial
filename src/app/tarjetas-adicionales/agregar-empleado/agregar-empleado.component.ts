import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent {
@Input() showAddEmpleado:boolean =false;
@Output() closeModalEmpleado = new EventEmitter<void>();
@Output() addUsuario = new EventEmitter<any>();
@Input() newUser: any;
@Input() arregloAreas:any;
@Input() usuarioSelect:any={};
@Input() llenadoAreaSub: any[] =[];
isActive: boolean = false;

  toggleSwitch() {
    this.isActive = !this.isActive;
    console.log(this.isActive);
  }
}
