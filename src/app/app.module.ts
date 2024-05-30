import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlameTheme,FlameThemeService, FlameThemeModule} from '@ngx-mxflame/atoms/theme';

//import {FlameButtonModule} from '@ngx-mxflame/atoms/button';
import { MisProductosModule } from './mis-productos/mis-productos.module';
import { TarjetasAdicionalesModule } from './tarjetas-adicionales/tarjetas-adicionales.module';
import { DatosUsuarioService } from './tarjetas-adicionales/services/datos-usuario.service';
import { FormsModule } from '@angular/forms';
import { PrincipalModule } from './principal/principal.module';
import { InitialConfigurationModule } from './initial-configuration/initial-configuration.module';
import { ConfigService } from './services/config.service';

//BORRAR ESTAS LINEAS 20/05/2024
export function initConfigService(configService: ConfigService): Function {

  if (window.location.hostname === 'localhost') {
    
    const url = 'https://gateway-service-mx-comercial-cards-dev.apps.str01.mex.dev.mx1.paas.cloudcenter.corp/';

    return () => configService.loadConfig(url);
    
  } else {

    return () => configService.loadConfig();
    
  }
  
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FlameThemeModule.forRoot({
      themes:[FlameTheme],
      default:FlameTheme
    }),
    PrincipalModule,
    MisProductosModule,
    TarjetasAdicionalesModule,
    InitialConfigurationModule
    //FlameButtonModule
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: initConfigService, multi: true, deps: [ConfigService] },
    FlameThemeService,
    DatosUsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
