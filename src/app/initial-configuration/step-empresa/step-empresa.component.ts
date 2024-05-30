import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Area } from 'src/app/models/area.model';
import { Subarea } from 'src/app/models/subarea.model';
import { AreasService } from 'src/app/services/areas.service';
import { EstructuraService } from 'src/app/services/estructura.service';

@Component({
  selector: 'app-step-empresa',
  templateUrl: './step-empresa.component.html',
  styleUrls: ['./step-empresa.component.scss']
})
export class StepEmpresaComponent implements OnInit, OnDestroy {

  areas!: Area[];
  saveareas: any[] = new Array;
  savesubareas: any[] = new Array;
  areadata: any[] = new Array;
  addNewAreaButtonPressed = false;
  addNewSubareaButtonPressed = false;
  currentIndexOfArea!: number;
  currentIndexOfSubarea!: number;
  modifyAreaButtonPressed = false;
  modifySubareaButtonPressed = false;

  currentRoute :any;

  @ViewChild('f', {static: false}) formForArea!: NgForm;
  @ViewChild('f2', {static: false}) formForSubarea!: NgForm;
  @ViewChild('f3', {static: false}) formFormModifyArea!: NgForm;
  @ViewChild('f4', {static: false}) formFormModifySubarea!: NgForm;
  private subscription!: Subscription;
  constructor(private _estructuraService: EstructuraService,
              private _router: Router,
              private _areaService: AreasService) { }

  ngOnInit(): void {
    this.currentRoute = this._router.url;
    this.areas = this._estructuraService.getAreas();
    console.log(this.areas);
    this.subscription = this._estructuraService.areasChanged.subscribe(
      (areas: Area[]) => {
        this.areas = areas;
        console.log(this.areas);
      }
    );
    
  }

  onAddNewArea() {
    this.addNewAreaButtonPressed = true;
  }

  addNewArea() {
    const value = this.formForArea.value;
    const newArea = new Area(value.areaName, value.subareaName);
    //passes new are to the function with and empty subarea array to allow the further adding of subareas
    this._estructuraService.addNewArea(
      new Area(newArea.nombre, [])
    );
    this.saveareas;
    this.areas.forEach( (data: any) => {
      console.log(data);
      if( !data.find || typeof( (item: any) => item.nombre === data.nombre )) {
    
        this.saveareas.push({
          "listArea":[{
            "nombArea": data.nombre,
            "idArea": null,
            "idPadre": null,
            "limite": 100,
            "idDireccion": null,
            "limPorSubarea": null,
            "idEmpresa": "7d2de5c6-7e99-11ee-b962-0242ac120002",
            "empresa": null
          }]
        });
        
      }

    });

    this._estructuraService.sendAltaArea(this.saveareas[0])
    .subscribe( resp => {

      console.log('Respuesta componente', resp);
      this.saveareas = new Array;
      return resp;
    })

    console.log(this.saveareas[0]);

    this.addNewAreaButtonPressed = false;//Hides the button once it's pressed
  }

  onAddNewSubarea(index: number) {
    this.addNewSubareaButtonPressed = true;
    this.currentIndexOfArea = index;//passes the current index where you want to add a subarea
  }

  addNewSubarea(index: number) {
    const valueSubarea = this.formForSubarea.value;
    const newSubarea = new Subarea(valueSubarea.subareaName);
    this.areadata;
    let idArea = "";
    let idEmpresa = "";
    this.savesubareas;

    this.areas.forEach( (data:any ) => {

      this.areadata.push({
        'nombreArea': data.nombre,
        'idEmpresa' : "7d2de5c6-7e99-11ee-b962-0242ac120002"
      })
      
    })

    this._areaService.getAreaByName( this.areadata[0] )
        .subscribe( (resp:any) => {
          console.log(resp);
          idArea = resp.data[0].idArea;
          idEmpresa = resp.data[0].idEmpresa;

          console.log('idArea', idArea);
          console.log('idEmpresa', idEmpresa);

          this.savesubareas.push({
            "listArea":[{
              "nombArea": valueSubarea.subareaName,
              "idArea": null,
              "idPadre": idArea,
              "limite": 10,
              "idDireccion": null,
              "limPorSubarea": null,
              "idEmpresa": idEmpresa,
              "empresa": null
            }]
          });

          console.log('this.savesubareas', this.savesubareas[0]);

          this._estructuraService.sendAltaArea(this.savesubareas[0])
              .subscribe( resp => {
      
                console.log('Respuesta componente', resp);
                this.savesubareas = new Array;
                return resp;
                
              });
  
        this._estructuraService.addNewSubarea(index, newSubarea);
        this.addNewSubareaButtonPressed = false;//Hides the button once it's pressed
  

        });

  }

  checkChange(indexes:number[]){
    console.log(indexes);
    console.log(this.currentIndexOfArea);
    this.modifyAreaButtonPressed = true;
    this.currentIndexOfArea = indexes[0];
    this.currentIndexOfSubarea = indexes[1];
    
  }

  checkChangeSubareas(indexes:number[]){
    this.modifySubareaButtonPressed = true;
    this.currentIndexOfArea = indexes[0];
    this.currentIndexOfSubarea = indexes[1];

  }

  modifyArea(areaIndex: number){
    const value = this.formFormModifyArea.value;
    const newAreaName = value.newAreaName;
    console.log(areaIndex);
    console.log(value);
    this._estructuraService.modifyArea(areaIndex, newAreaName);
    
    this.modifyAreaButtonPressed = false;
  }

  modifySubarea(areaIndex:number, subareaIndex: number){
    const value = this.formFormModifySubarea.value;
    const newSubareaName = value.newSubareaName;
    console.log("area index: "+areaIndex);
    console.log("subarea index: " +subareaIndex);
    console.log("new subarea name: "+ value.newSubareaName);
    this._estructuraService.modifySubarea(areaIndex, subareaIndex, newSubareaName);
    this.modifySubareaButtonPressed = false;
  }

  stepadvanced( event:any ) {
    console.log(this.areas);
    this.areas = [];
    this._router.navigate(['/initial-configuration/delivery-addressess']);
  }

  onCancelModifyArea(){
    this.modifyAreaButtonPressed = false;
  }

  onCancelModifySubarea(){
    this.modifySubareaButtonPressed = false;
  }

  onCancelAddArea(){
    this.addNewAreaButtonPressed = false;
  }
  onCancelAddSubarea(){
   this.addNewSubareaButtonPressed = false; 
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
