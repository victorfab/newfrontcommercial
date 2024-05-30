import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, catchError, map, retry, throwError } from "rxjs";
import { Area } from "src/app/models/area.model";
import { Subarea } from "src/app/models/subarea.model";
import { environment } from "src/environments/environment";
import { AreasService } from "./areas.service";
import { ConfigService } from "./config.service";

@Injectable()
export class EstructuraService{
    areasChanged = new Subject<Area[]>();//Used to update areas when new ones are added or old ones are eliminated.
    subareasChanged = new Subject<Subarea[]>();//Used to update subareas when new ones are added or old ones are eliminated.
    datadel: any[] = new Array;

    constructor( private _http: HttpClient,
                 private areaService: AreasService,
                 private _conf: ConfigService ) { }
    //Some Areas are already loaded to test the component. You may comment them if you like to use the component with no areas initialized.
   /*  private areas: Area[] = [
        new Area('Contabilidad',
        [ new Subarea('Gestión'),
        new Subarea('Ventas'),
        new Subarea('Management')]
        ),
        new Area('Recursos Humanos',
        [ new Subarea('Gestión'),
        new Subarea('Reclutamiento')]
        )

    ]; */

    private areas: Area[] = [];

    //This function retrieves all Areas.
    getAreas() {
        return this.areas.slice();//returns a copy of the array
    }

    //Thus function receives an index an returns the Area object corresponding to the index in an array of Areas.
    getArea(index: number) {
        return this.areas[index];
    }

    //This function receives an Area object and adds it ti the array of Areas.
    addNewArea(newArea: Area) {
        this.areas.push(newArea);
        this.areasChanged.next(this.areas.slice());
        console.log(this.areas);
    }

    //To be implemented: In case we need to add multiple subareas at the same time.
    //addNewAreas(newAreas: Area[]){
      //  this.areas.push(...newAreas);
        //this.areasChanged.next(this.areas.slice());
    //}

    //This function receives the index of the Area where it should add the new Subarea.
    addNewSubarea(index: number, newSubarea: Subarea) {
        console.log(index);
        console.log(newSubarea);
        this.areas[index].subareas.push(newSubarea);
        this.areasChanged.next(this.areas.slice());
    }

    modifyArea(areaIndex: number, newAreaName: string) {
        if (areaIndex !== -1) {
            this.areas[areaIndex].nombre = newAreaName;
          }
          //console.log(newAreaName);
          this.areasChanged.next(this.areas.slice());  
    }

    modifySubarea(areaIndex: number, subareaIndex: number, newSubareaName: string) {
        if (subareaIndex !== -1 && areaIndex !== -1) {
            this.areas[areaIndex].subareas![subareaIndex].nombre = newSubareaName;
          }
          //this.areasChanged.next(this.areas.slice());  
          this.subareasChanged.next(this.areas[areaIndex].subareas!.slice());  
    }

    sendAltaArea( data: any ) {

        /* const url = `${environment.guardarArea}`; */

        const url = `${ this._conf.config.empresa}/guardarArea`;
        let urlenc = encodeURI( url );

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'idEmpresa': '7d2de5c6-7e99-11ee-b962-0242ac120002'
            }),
        };
          
        return this._http.post( urlenc, data, httpOptions )
            .pipe(
                retry(3),
                map( (resp:any) => { 
                    console.log('Respuesta servicio', resp);
                    return resp 
                }),
                catchError( (errors: HttpErrorResponse) => {
                return throwError(errors);
                })
            )
    
    };

    //This function receives the index of the Area to delete, after deletion the Areas remaining are updated
    eliminateArea(areaIndex: number) {
        console.log(areaIndex);
        let areaname!: string;
        this.datadel = [];
        this.getAreas();
        console.log(this.areas);

        this.areas.splice(areaIndex, 1);
        this.areasChanged.next(this.areas.slice());

        this.areas.forEach( (data:any) => {
            console.log(data);
            console.log(this.areas);
            areaname = this.areas[areaIndex].nombre;
            

            this.areaService.getAreaByName(areaname)
                .subscribe( (resp:any) => {

                    this.datadel.push({
                        "idArea": resp.idArea
                    })

                    this.borrarArea(this.datadel);
                })    
        })

    }

    borrarArea( data: any) {

        const url = `${environment.deleteArea}`;

        /* const url = `${ this._conf.config.empresa}/deletearea`; */
        let urlenc = encodeURI( url );

        return this._http.delete( urlenc, data )
            .pipe(
                retry(3),
                map( (resp:any) => { 
                    console.log('Respuesta servicio', resp);
                    return resp 
                }),
                catchError( (errors: HttpErrorResponse) => {
                return throwError(errors);
                })
            )
    }

    eliminateSubarea(areaIndex:number, subareaIndex: number) {
        this.areas[areaIndex].subareas!.splice(subareaIndex,1);
        this.subareasChanged.next(this.areas[areaIndex].subareas!.slice());
    }

    
}