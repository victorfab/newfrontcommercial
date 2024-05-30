import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
//import { URLS_LOCAL } from 'src/app/constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class NomStatusService {

  constructor(
    private httpClient:HttpClient
  ) {
  }
  /*
  obtenerStatus():Observable<any>{
    return this.httpClient.get(URLS_LOCAL.STATUS).pipe(catchError(this.obtenerError));
  }
  obtenerError(error:HttpErrorResponse){
    console.log(error);
    return throwError(()=> error.status);
  }*/
}
