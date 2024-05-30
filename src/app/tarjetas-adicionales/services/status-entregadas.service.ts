import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
//import { URLS_LOCAL } from 'src/app/constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class StatusEntregadasService {
    constructor(
      private httpClient:HttpClient
    ) {
    }
    /*
    obtenerStatusEntregadas():Observable<any>{
      return this.httpClient.get(URLS_LOCAL.ENTREGADAS).pipe(catchError(this.obtenerError));
    }
    obtenerError(error:HttpErrorResponse){
      console.log(error);
      return throwError(()=> error.status);
    }*/

}

