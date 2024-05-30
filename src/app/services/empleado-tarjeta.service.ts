import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ConfigService } from './config.service';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoTarjetaService {
 //private url ='/api/card/v1/empresa/empleado/tarjeta'
  constructor( private _http: HttpClient,
               private _conf: ConfigService ) { }

  postData( data: {} ) {
    console.log('data empleado tarjeta', data);
    //const url = 'https://gateway-service-mx-comercial-cards-pre.apps.ocp05.mex.pre.mx1.paas.cloudcenter.corp/card/v1/empresa/empleado/tarjeta';

    /*
    const headers = new HttpHeaders({
      'Content-Type':'aplplication/json',
    });*/

    /* const url = `${environment.post_empleados}`; */

    let url = `${ this._conf.config.empleados }/fechaspagotarjeta`;
    /* let urlenc = encodeURI( url ); */

    /* const url = environment.post_empleados; */
    /* return this.http.post(url, data); */
    return this._http.post( url, data ).pipe(catchError(this.handleError));
  }

  handleError(error : HttpErrorResponse) {
    console.log(error);
    console.log(error.ok);
    return throwError(() => error.ok);
  }
  
}
