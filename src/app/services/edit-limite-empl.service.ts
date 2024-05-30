import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ConfigService } from './config.service';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditLimiteEmplService {

  constructor(private _http: HttpClient,
              private _conf: ConfigService) { }

  postEditLimite( data:any ) {

    const url = `${environment.post_limiteEmpl}`;

    /* let url = `${this._conf.config.empresaedit}/updateLimitsEmployee`; */
    /* let urlenc = encodeURI( url ); */

    return this._http.post( url, data ).pipe(catchError(this.handleError));
    /* return this._http.get("./assets/data/updatelimit.json"); */
  }

  handleError(error : HttpErrorResponse) {
    console.log(error);
    console.log(error.ok);
    return throwError(() => error.ok);
  }
  
}
