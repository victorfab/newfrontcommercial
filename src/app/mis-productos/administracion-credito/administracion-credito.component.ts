import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-administracion-credito',
  templateUrl: './administracion-credito.component.html',
  styleUrls: ['./administracion-credito.component.css']
})
export class AdministracionCreditoComponent {

  @Input() visibility:boolean = false;
  @Input() userPorArea:any = [];
  //@Input() visibilityAreas: boolean = true;
  //@Input() moreAreas:boolean = false;
  @Input() totalEmpleados: any = {};
  //@Output() masAreas = new EventEmitter<void>();
  //@Output() menosAreas = new EventEmitter<void>();
  //@Output() infoUsuarioSub = new EventEmitter<void>();
  @Output() infoUser = new EventEmitter<void>();
  @Output() cargarMasAreas = new EventEmitter<void>();
  @Output() sendPostRequest = new EventEmitter<any>();
  @Output() infoClick = new EventEmitter<string>();
  @Output() infoSubarea= new EventEmitter<any>();
  //@Input() mostrar = 4; //Areas a mostrar

  showSubArea:boolean = false;
  showEmpleados:boolean = false;
  showEmpleadosArea:boolean = false;
  iconRotation:boolean = false;
  public page!:number;

  rotation(area:any){
    area.showSubArea = !area.showSubArea;
    area.iconRotation = !area.iconRotation;
    area.showEmpleadosArea = !area.showEmpleadosArea;
  }
  rotationEmpleados(sub:any){
    sub.showEmpleados = !sub.showEmpleados;
    sub.iconRotation = !sub.iconRotation;
  }
  infoUserClicked(usuario: any) {
    console.log(this.userPorArea);
    // Cerrar la información de todas las áreas y subáreas
    this.userPorArea.forEach((row:any) => {
      row.area.forEach((area:any) => {
        area.showSubArea = false;
        area.showEmpleadosArea = false;
        area.iconRotation = false;

        area.subareas.forEach((sub:any) => {
          sub.showEmpleados = false;
          sub.iconRotation = false;
        });
      });
    });

    // Se llama al metodo infoUser con la info del usuario
    this.infoUser.emit(usuario);
  }


}
