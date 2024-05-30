import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/services/config.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private httpClient : HttpClient,
              private _conf: ConfigService) { }

  upload( file: any ) {9
    console.log(file);
    /* const url = `${environment.uploadFile}`; */

    let url = this._conf.config.direccioncp;
    let urlenc = encodeURI( url );
/*     let formData = new FormData();
    formData.append('file', file); */
    //console.log(formData);

/*     let req = new HttpRequest('POST', '/upload', formData, {
      reportProgress : true,
      responseType : 'json'
    }); */

    return this.httpClient.post( urlenc, file);
  }

}
