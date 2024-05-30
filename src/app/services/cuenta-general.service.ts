import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class CuentaGeneralService {

  constructor(private _httpClient : HttpClient,
              private _conf: ConfigService) {}

  getGeneralCount(buc: string):Observable<any> {

    /* const url = `${environment.get_credito}/${buc}`; */

    const url = `${ this._conf.config.estructura}/${buc}`;
    
    return this._httpClient.get( url ).pipe(catchError(this.handleError));

    /* return this.httpClient.get("./assets/data/estructura.json"); */

  }

  handleError(error : HttpErrorResponse) {
    console.log(error);
    console.log(error.ok);
    return throwError(() => error.ok);
  }
  
}
