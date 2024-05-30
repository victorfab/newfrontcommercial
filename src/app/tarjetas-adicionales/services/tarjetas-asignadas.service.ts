import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, pipe, throwError } from 'rxjs';
//import { URLS_LOCAL } from 'src/app/constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TarjetasAsignadasService {

  constructor(
    private httpClient:HttpClient
  ) {
  }
  /*
  obtenerTarjetas():Observable<any>{
    return this.httpClient.get(URLS_LOCAL.TARJETAS_SOLICITADAS).pipe(catchError(this.obtenerError));
  }
  obtenerError(error:HttpErrorResponse){
    console.log(error);
    return throwError(()=> error.status);
  }*/
}
