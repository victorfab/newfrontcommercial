import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatosUsuarioService {

  /*
  datosUsuariosSeleccionados: any[]=[];
  constructor() {
    this.datosUsuariosSeleccionados = [
      {
        idSolicitud:"Z9098765",
        idArea:1,
        area:"Contabilidad",
        idSubArea:2,
        subarea:"Recursos",
        nombre:"Erika",
        correo:"dioni@minsait.com",
        limite_credito:"13000.00",
        idStatus:1,
        fecha:"6/9/2023"
      }
    ]
  }*/
  constructor(
    private httpClient:HttpClient
  ) {}

  /*
  obtenerPendientes():Observable<any>{
    return this.httpClient.get(URLS_LOCAL.PENDIENTES).pipe(catchError(this.obtenerError));
  }
  obtenerError(error:HttpErrorResponse){
    console.log(error);
    return throwError(()=> error.status);
  }*/
}
