import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
/* import { URLS_LOCAL } from '../constants/app.constants'; */

@Injectable({
  providedIn: 'root'
})
export class MovimientosUsuariosSubService {

  constructor(
    private httpClient:HttpClient
  ) {
  }
  obtenerMovimientosUserSub(){
    /* return this.httpClient.get(URLS_LOCAL.MOVIMIENTOS_USUARIOS_SUBAREAS).pipe(catchError(this.obtenerErrorUser)); */
    
  }
  obtenerErrorUser(error:HttpErrorResponse){
    console.log(error);
    return throwError(()=> error.status);
  }
}
