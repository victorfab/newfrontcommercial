import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgControl, NgForm } from '@angular/forms';
import { Direccion } from '../../../models/direccion.model';
import { DireccionesService } from '../../../services/direcciones.service';

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.scss']
})
export class DireccionComponent implements OnInit {

  id!: string;
  cp!: string;
  alias!: string;
  calle!: string;
  numext!: string;
  numint!: string;
  colonia!: Direccion[];
  coloniaselect: any[] = new Array;
  coloniaid!: string;
  municipio!: Direccion[];
  estadoid!: string;
  municipioselect: any[] = new Array;
  municipioid!: string;
  estadoselect: any[] = new Array;
  addresFormGroup!: FormGroup;
  sendDirecciones: any[] = new Array;
  pais: string = 'MX';
  idEmpresa!: string;
  principal!: string;
  direcciones!: Direccion[];
  newDireccion: Direccion[] = new Array;
  addDireccion: any[] = new Array;

  constructor( private direccionesService: DireccionesService,
               private _formBuilder: FormBuilder ) { 

                this.initializeForm();

              }

  ngOnInit(): void {

    this.findAdress();

  }

  private initializeForm(): void {
    this.addresFormGroup = this._formBuilder.group({
      alias: this.alias,
      calle: this.calle,
      numext: this.numext,
      numint: this.numint,
      cp: this.cp,
      colonia: '',
      municipio: '',
      entidadFederativa: this.estadoid,
    });

    console.log('this.addresFormGroup', this.addresFormGroup);
    console.log('this.coloniaselect', this.coloniaselect);

  }

  findAdress() {

    this.direccionesService.findDirecciones()
        .subscribe( (resp: any) => {
          console.log('resp', resp);
          resp.forEach((data:any) => {
            console.log('this is data0', data);
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
              'principal': data.direccion.principal,
              'nombre': ''
            });

          });
/*           this.direcciones = [
            new Direccion(
              resp.direccion.id,
              resp.direccion.calle,
              resp.direccion.numExterior,
              resp.direccion.numInterior,
              resp.direccion.colonia,
              resp.direccion.codigoPostal,
              resp.direccion.estado,
              resp.direccion.pais,
              resp.direccion.idEmpresa,
              resp.direccion.alias,
              resp.direccion.municipio,
              resp.direccion.principal
            )
          ]; */

          console.log('this.newDireccion', this.newDireccion);
          if ( resp.length === 0 ) {
            this.principal = "1";
          } else {
            this.principal = "0";
            this.id = resp[1].direccion.id;
            this.idEmpresa = resp[1].direccion.idEmpresa;
            
          }
        })
  }

  addNewAddress(form: NgForm) {

    console.log('form', form);

    const value = form.value;
    console.log('value', value);
    this.addDireccion.push({
      "lstDirecciones": [
        {
          'id': this.id,
          'calle': value.calle,
          'numExterior': value.numExt,
          'numInterior': value.numInt,
          'colonia': value.colonia,
          'codigoPostal': value.cp,
          'estado': value.estado,
          'pais': this.estadoid,
          'idEmpresa': this.idEmpresa,
          'alias': value.alias,
          'municipio': value.municipio,
          'principal': this.principal,
        }
    ]});

    //this.form.reset();
    console.log('this.addDireccion', this.addDireccion);
    this.newDireccion.push(this.addDireccion[0].lstDirecciones[0]);
   /*  this.direcciones = this.newDireccion; */

    this.direccionesService.saveupdateDireccion(this.addDireccion[0])
        .subscribe( (resp: any) => {
          console.log('resp', resp);

/*           const tmpDireccion = new Direccion(
            resp.data[0].id,
            resp.data[0].calle,
            resp.data[0].numExterior,
            resp.data[0].numInterior,
            resp.data[0].colonia,
            resp.data[0].codigoPostal,
            resp.data[0].estado,
            resp.data[0].pais,
            resp.data[0].idEmpresa,
            resp.data[0].alias,
            resp.data[0].munic,
            resp.data[0].principal
          ); */

          console.log('this.newDireccion', this.newDireccion);
          this.direccionesService.addNewDirecciones(this.newDireccion);
          /* this.sendDirecciones.push(this.newDireccion); */
          console.log('newDireccion', this.newDireccion);
          console.log('this.direcciones', this.direcciones);
          console.log('this.sendDirecciones', this.sendDirecciones);
      
          form.reset();

        })

  }

  getcp() {
    console.log('CP', this.cp);
    
    this.direccionesService.getCodigoPostal( this.cp )
        .subscribe( (resp:any ) => {
          console.log('respuesta component', resp);
          this.colonia = resp.listColonia.forEach( (data:any) => {
            this.coloniaselect.push({
              'nombre': data.nombre,
              'id': data.id
            })
          });

          this.municipioselect.push({
            'nombre': resp.municipio[0].nombre,
            'id': resp.municipio[0].id
          })
            console.log(this.municipioselect);
          
          this.estadoselect = resp.entidadFederativa.nombre
          this.estadoid = resp.entidadFederativa.id;
          this.colonia = this.coloniaselect[0].nombre;
          this.municipio = this.municipioselect[0].nombre;

          console.log('this.colonia', this.colonia);
          console.log('this.municipio', this.municipio);
        })
  }

  selectChangeColonia( $event: any ) {
    console.log($event);
    this.coloniaid = $event;
  }

  selectChangeMunicip( $event: any ) {
    console.log($event);
    this.municipioid = $event;
    console.log(this.municipioid);
    console.log(this.municipio);
    console.log(this.colonia);
  }

}
