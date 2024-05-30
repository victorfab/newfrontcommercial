import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ConfigService } from './config.service';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AreasService {
  areas:Array<any> = [];

  constructor(private http: HttpClient,
              private _conf: ConfigService,) { }

  postEditLimiteArea(data:any) {

    let url = `${environment.post_limiteEmpl}`;
    
    /* let url = `${ this._conf.config.empresa }/updateLimitsArea`; */
    let urlenc = encodeURI( url );

    return this.http.post(urlenc, data).pipe(catchError(this.handleError));
    //return this.http.get("./assets/data/updatelimitarea.json");
  }

  getAreaByName(data:any) {

    let url = `${environment.getArea}`;

    /* let url = `${ this._conf.config.empresa }/getArea`; */
    let urlenc = encodeURI( url );

    return this.http.post(urlenc, data).pipe(catchError(this.handleError));

  }

  deleteArea( id: any ) {

    let url = `${environment.deleteArea}`;

    /* let url = `${ this._conf.config.estructura }/deletearea`; */
    let urlenc = encodeURI( url );

    return this.http.delete(urlenc, id).pipe(catchError(this.handleError));
  }

  handleError(error : HttpErrorResponse) {
    console.log(error);
    console.log(error.ok);
    return throwError(() => error.ok);
  }

}
