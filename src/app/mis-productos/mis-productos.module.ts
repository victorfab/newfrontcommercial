import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { AdministracionCreditoComponent } from './administracion-credito/administracion-credito.component';
import { CreditoTarjetaComponent } from './credito-tarjeta/credito-tarjeta.component';
import { FiltradoAreaComponent } from './filtrado-area/filtrado-area.component';
import { FiltradoNumeroComponent } from './filtrado-numero/filtrado-numero.component';
import { FiltradoUsuariosComponent } from './filtrado-usuarios/filtrado-usuarios.component';
import { LimitecreditoAreaComponent } from './limitecredito-area/limitecredito-area.component';
import { LimitecreditoUsuariosComponent } from './limitecredito-usuarios/limitecredito-usuarios.component';
import { ModalExportComponent } from './modal-export/modal-export.component';
import { ModalExportAreaComponent } from './modal-export-area/modal-export-area.component';
import { MovimientosUsuarioComponent } from './movimientos-usuario/movimientos-usuario.component';
import { UsuariosAreaComponent } from './usuarios-area/usuarios-area.component';
import { PipesModule } from '../pipes/pipes.module';
import { FiltradoSubareasComponent } from './filtrado-subareas/filtrado-subareas.component';
import { LimitecreditoSubareaComponent } from './limitecredito-subarea/limitecredito-subarea.component';
import { ModalExportSubareaComponent } from './modal-export-subarea/modal-export-subarea.component';
import { FormsModule } from '@angular/forms';
import { ModalEditarLimiteCreditoComponent } from './modal-editar-limite-credito/modal-editar-limite-credito.component';
import { ModalEditarLimiteSubareaComponent } from './modal-editar-limite-subarea/modal-editar-limite-subarea.component';
import { ModaSupertokenLimiteAreaComponent } from './moda-supertoken-limite-area/moda-supertoken-limite-area.component';
import { ModalComprobanteLimiteAreaComponent } from './modal-comprobante-limite-area/modal-comprobante-limite-area.component';
import { ModalSupertokenLimiteSubareaComponent } from './modal-supertoken-limite-subarea/modal-supertoken-limite-subarea.component';
import { ModalComprobanteLimiteSubareaComponent } from './modal-comprobante-limite-subarea/modal-comprobante-limite-subarea.component';
import { ModalEditarLimiteEmpleadoComponent } from './modal-editar-limite-empleado/modal-editar-limite-empleado.component';
import { ModalSupertokenLimiteEmpleadoComponent } from './modal-supertoken-limite-empleado/modal-supertoken-limite-empleado.component';
import { ModalComprobanteLimiteEmpleadoComponent } from './modal-comprobante-limite-empleado/modal-comprobante-limite-empleado.component';
import { ModalAutenticacionComponent } from './modal-autenticacion/modal-autenticacion.component';
import { RouterModule } from '@angular/router';
import { ModalExcedenteLimiteComponent } from './modal-excedente-limite/modal-excedente-limite.component';



@NgModule({
  declarations: [
    AdministracionCreditoComponent,
    CreditoTarjetaComponent,
    FiltradoAreaComponent,
    FiltradoSubareasComponent,
    FiltradoNumeroComponent,
    FiltradoUsuariosComponent,
    LimitecreditoAreaComponent,
    LimitecreditoUsuariosComponent,
    ModalExportComponent,
    ModalExportAreaComponent,
    MovimientosUsuarioComponent,
    UsuariosAreaComponent,
    LimitecreditoSubareaComponent,
    ModalExportSubareaComponent,
    ModalEditarLimiteCreditoComponent,
    ModalEditarLimiteCreditoComponent,
    ModalEditarLimiteSubareaComponent,
    ModaSupertokenLimiteAreaComponent,
    ModalComprobanteLimiteAreaComponent,
    ModalSupertokenLimiteSubareaComponent,
    ModalComprobanteLimiteSubareaComponent,
    ModalEditarLimiteEmpleadoComponent,
    ModalSupertokenLimiteEmpleadoComponent,
    ModalComprobanteLimiteEmpleadoComponent,
    ModalAutenticacionComponent,
    ModalExcedenteLimiteComponent

  ],
  imports: [
    NgxPaginationModule,
    FormsModule,
    CommonModule,
    PipesModule,
    RouterModule
  ],
  exports:[
    AdministracionCreditoComponent,
    CreditoTarjetaComponent,
    FiltradoAreaComponent,
    FiltradoSubareasComponent,
    FiltradoNumeroComponent,
    FiltradoUsuariosComponent,
    LimitecreditoAreaComponent,
    LimitecreditoUsuariosComponent,
    ModalExportComponent,
    ModalExportAreaComponent,
    MovimientosUsuarioComponent,
    UsuariosAreaComponent,
    LimitecreditoSubareaComponent,
    ModalExportSubareaComponent,
    ModalEditarLimiteCreditoComponent,
    ModalEditarLimiteSubareaComponent,
    ModaSupertokenLimiteAreaComponent,
    ModalComprobanteLimiteAreaComponent,
    ModalSupertokenLimiteSubareaComponent,
    ModalComprobanteLimiteSubareaComponent,
    ModalEditarLimiteEmpleadoComponent,
    ModalSupertokenLimiteEmpleadoComponent,
    ModalComprobanteLimiteEmpleadoComponent,
    ModalAutenticacionComponent,
    ModalExcedenteLimiteComponent
  ]
})
export class MisProductosModule { }
