import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Direccion } from '../../models/direccion.model';
import { DireccionesService } from '../../services/direcciones.service';

@Component({
  selector: 'app-step-direcciones-entrega',
  templateUrl: './step-direcciones-entrega.component.html',
  styleUrls: ['./step-direcciones-entrega.component.scss']
})
export class StepDireccionesEntregaComponent implements OnInit, OnDestroy {

  @Output() public direcciones!: Direccion[];
  @Output() public newDireccion: any[] = new Array;
  addNewAddressButton = false;
  private subscription!: Subscription;

  id!: string;
  principal!: string;
  idEmpresa!: string;

  constructor(private direccionesService: DireccionesService) { }

  ngOnInit() {
                           
    this.getDirecciones();

    this.subscription = this.direccionesService.addressesChanged
        .subscribe( (direcciones: Direccion[] ) => {
          console.log(direcciones);
          this.newDireccion = direcciones
          console.log(this.newDireccion)
          this.addNewAddressButton = false;
        }
    );

  }

  onAddNewAddress(){
    this.addNewAddressButton = true;
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  getDirecciones() {

    this.direccionesService.findDirecciones()
        .subscribe( ( resp: any ) => {
          console.log(resp);

          resp.forEach((data:any) => {

            this.newDireccion.push({
              
                'id': data.direccion.id,
                'calle': data.direccion.calle,
                'numExterior': data.direccion.numExterior,
                'numInterior': data.direccion.numInterior,
                'colonia': data.direccion.colonia,
                'codigoPostal': data.direccion.codigoPostal,
                'estado': data.direccion.estado,
                'pais': data.direccion.pais,
                'idEmpresa': data.direccion.idEmpresa,
                'alias': data.direccion.alias,
                'municipio': data.direccion.municipio,
                'principal': data.direccion.principal
            });
            

            console.log(data);
            if ( data.length === 0 ) {
              this.principal = "1";
            } else {
              this.principal = "0";
              this.id = data.direccion.id;
              this.idEmpresa = data.direccion.idEmpresa;
              
            }
          })
            console.log(this.newDireccion);

        })

  }
    
}
