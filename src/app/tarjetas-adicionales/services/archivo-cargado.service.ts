import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArchivoCargadoService {

  constructor(
    private httpClient:HttpClient
  ) {
  }
  obtenerAreas():Observable<any>{
    return this.httpClient.get('').pipe(catchError(this.obtenerError));
  }
  obtenerError(error:HttpErrorResponse){
    console.log(error);
    return throwError(()=> error.status);
  }
}
