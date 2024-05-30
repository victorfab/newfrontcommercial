import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenidoTarjetasComponent } from './tarjetas-adicionales/contenido-tarjetas/contenido-tarjetas.component';
import { ContenidoComponent } from './principal/contenido/contenido.component';
import { InitialConfigurationComponent } from './initial-configuration/initial-configuration.component';
import { TarjetasAsignadasComponent } from './tarjetas-adicionales/tarjetas-asignadas/tarjetas-asignadas.component';
import { ArchivoCargadoComponent } from './tarjetas-adicionales/archivo-cargado/archivo-cargado.component';


const routes: Routes = [
  {path: 'mis-productos',component:ContenidoComponent},
  {path: 'detalle-area',component:ContenidoComponent},
  {path: 'detalle-subarea',component:ContenidoComponent},
  {path: 'detalle-empleado',component:ContenidoComponent},
  {path: 'tarjetas-adicionales',component:ContenidoTarjetasComponent},
  {path: 'solicitar-tarjetas', component:TarjetasAsignadasComponent},
  {path: 'initial-configuration', component: InitialConfigurationComponent},
  {path: 'archivo-cargado', component: ArchivoCargadoComponent},
  {path: '', pathMatch:'full', redirectTo:'mis-productos'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
