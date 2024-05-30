import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class MovimientosEmpleadosService {

  constructor( private _http: HttpClient,
               private _conf: ConfigService ) { }


  postMovimientos( data:any ) {

    const url = `${environment.post_movimientos}`;

    /* const url = `${ this._conf.config.empresa}/movimientos`; */
    let urlenc = encodeURI( url );

    return this._http.post( urlenc, data );
    /* return this.http.get("./assets/data/movimientos.json"); */
  }
}
