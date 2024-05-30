import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenidoTarjetasComponent } from './contenido-tarjetas/contenido-tarjetas.component';
import { SolicitarTarjetasComponent } from './solicitar-tarjetas/solicitar-tarjetas.component';
import { LoadingModalComponent } from './loading-modal/loading-modal.component';
import { AgregarEmpleadoComponent } from './agregar-empleado/agregar-empleado.component';
import { ArchivoCargadoComponent } from './archivo-cargado/archivo-cargado.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalCancelarProcesoComponent } from './modal-cancelar-proceso/modal-cancelar-proceso.component';
import { ModalEliminarUsuarioComponent } from './modal-eliminar-usuario/modal-eliminar-usuario.component';
import { ModalUsuarioEliminadoComponent } from './modal-usuario-eliminado/modal-usuario-eliminado.component';
import { ModalConfirmarSolicitudComponent } from './modal-confirmar-solicitud/modal-confirmar-solicitud.component';
import { ModalSupertokenComponent } from './modal-supertoken/modal-supertoken.component';
import { ModalComprobanteSolicitudComponent } from './modal-comprobante-solicitud/modal-comprobante-solicitud.component';
import { FormsModule } from '@angular/forms';
import { TarjetasAsignadasComponent } from './tarjetas-asignadas/tarjetas-asignadas.component';
import { RastreoEnvioComponent } from './rastreo-envio/rastreo-envio.component';
import { PipesFechaModule } from './pipes/pipes.module';
import { ModalEliminarSolicitadasComponent } from './modal-eliminar-solicitadas/modal-eliminar-solicitadas.component';
import { ModalConfirmacionComponent } from './modal-confirmacion/modal-confirmacion.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ModalErrorComponent } from './modal-error/modal-error.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  declarations: [
    ContenidoTarjetasComponent,
    SolicitarTarjetasComponent,
    LoadingModalComponent,
    AgregarEmpleadoComponent,
    ArchivoCargadoComponent,
    ModalCancelarProcesoComponent,
    ModalEliminarUsuarioComponent,
    ModalUsuarioEliminadoComponent,
    ModalConfirmarSolicitudComponent,
    ModalSupertokenComponent,
    ModalComprobanteSolicitudComponent,
    TarjetasAsignadasComponent,
    RastreoEnvioComponent,
    ModalEliminarSolicitadasComponent,
    ModalConfirmacionComponent,
    ModalErrorComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    PipesFechaModule,
    SharedModule,
    NgxPaginationModule,
    PipesModule
  ],
  exports:[
    ContenidoTarjetasComponent,
    SolicitarTarjetasComponent,
    LoadingModalComponent,
    ModalErrorComponent
  ]
})
export class TarjetasAdicionalesModule { }
