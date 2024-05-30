import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { MenuComponent } from './menu/menu.component';
import { MisProductosModule } from '../mis-productos/mis-productos.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContenidoComponent } from './contenido/contenido.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { PipesModule } from '../pipes/pipes.module';
import { FechaFolioPipe } from '../pipes/fecha-folio.pipe';
import { TransformFechaPipe } from '../pipes/transform-fecha.pipe';
import { FechaMovPdfPipe } from '../pipes/fecha-mov-pdf.pipe';
import { SharedModule } from '../shared/shared.module';
import { TarjetasAdicionalesModule } from '../tarjetas-adicionales/tarjetas-adicionales.module';

@NgModule({
  declarations: [
    EncabezadoComponent,
    ContenidoComponent,
    MenuComponent
  ],
  imports: [
    NgxPaginationModule,
    FormsModule,
    CommonModule,
    MisProductosModule,
    TarjetasAdicionalesModule,
    RouterModule,
    HttpClientModule,
    PipesModule,
    SharedModule
  ],
  providers:[
    DecimalPipe, //Importación del pipe para DecimalPipe (transformar numeros a deciamal)
    FechaFolioPipe,
    TransformFechaPipe,
    FechaMovPdfPipe
  ],
  exports:[
    EncabezadoComponent,
    ContenidoComponent,
    MenuComponent
  ]
})
export class PrincipalModule { }
