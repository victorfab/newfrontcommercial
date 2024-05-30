import { Injectable } from "@angular/core";
import { Subject, catchError, map, retry, throwError } from "rxjs";
import { Direccion } from "../models/direccion.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { ConfigService } from "./config.service";

@Injectable()
export class DireccionesService{

    addressesChanged = new Subject<Direccion[]>();
    
    private direcciones: any[] = new Array;

    constructor(private _http: HttpClient,
                private _conf: ConfigService) { }

    getDirecciones(){
        return this.direcciones.slice();//returns a copy of the array
    }

    getDireccion(index: number) {
        return this.direcciones[index];
    }

    addNewDireccion(direccion: Direccion) {
        console.log('direccion', direccion);
        this.direcciones.push(direccion);
        this.addressesChanged.next(this.direcciones[0]);
    }

    addNewDirecciones(direcciones: Direccion[]) {
        this.direcciones.push(direcciones);
        this.addressesChanged.next(this.direcciones[0]);
    }

    getCodigoPostal( cp: any) {

        const url = `${ environment.getCodigoPostal }/${cp}`;

        /* let url = `${ this._conf.config.direccioncp }/codigopostalcompleto/${ cp }`; */
        /* let urlenc = encodeURI( url ); */
    
        return this._http.get( url )
            .pipe(
              
              map(( resp: any ) => {
                console.log(resp);
                return resp;
              
              }),
              catchError((err: any) => {
                
                return throwError('Mensaje: ' + err.error.message);
              
              })
            );
    }

    findDirecciones() {

        let url = environment.findDirecciones;
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'idEmpresa' : '7d2de5c6-7e99-11ee-b962-0242ac120002'
            }),
            observe: 'response' as 'response'
        };

        /* let url = `${ this._conf.config.direccion }/finddirecciones`; */
        /* let urlenc = encodeURI( url ); */

        return this._http.get( url, httpOptions )
                   .pipe(
                        map( (data: any) =>  {
                            console.log(data.body);
                            return data.body;
                    }),
                   );
    }

    saveupdateDireccion( data: any ) {

        const url = environment.saveupdatedirecciones;

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'idEmpresa' : '7d2de5c6-7e99-11ee-b962-0242ac120002'
            }),
            observe: 'response' as 'response'
        };

        /* let urlenc = encodeURI( url ); */

        return this._http.post( url, data, httpOptions )
                   .pipe(
                        map( (resp: any) =>  {
                            console.log(resp);
                            return resp;
                    }),
                   );

    }
}