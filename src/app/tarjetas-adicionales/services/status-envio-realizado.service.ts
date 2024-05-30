import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, observable, throwError } from 'rxjs';
//import { URLS_LOCAL } from 'src/app/constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class StatusEnvioRealizadoService {

  constructor(
    private httpClient:HttpClient
  ) {
  }
  /*
  obtenerStatusEnvioRealizado():Observable<any>{
      return this.httpClient.get(URLS_LOCAL.ENVIO_REALIZADO).pipe(catchError(this.obtenerError));
  }
  obtenerError(error:HttpErrorResponse){
    console.log(error);
    return throwError(()=> error.status);
  }*/
}
