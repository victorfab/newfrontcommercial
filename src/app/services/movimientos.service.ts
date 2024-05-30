import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
/* import { URLS_LOCAL } from '../constants/app.constants'; */

@Injectable({
  providedIn: 'root'
})
export class MovimientosService {

  //movimientos:Array<any> = [];

  constructor(
    private httpClient:HttpClient
  ) {
  }
  obtenerMovimientos(){
    /* return this.httpClient.get(URLS_LOCAL.MOVIMIENTOS).pipe(catchError(this.obtenerError)); */
  }
  obtenerError(error:HttpErrorResponse){
    console.log(error);
    return throwError(()=> error.status);
  }
}
