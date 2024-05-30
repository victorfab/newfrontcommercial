import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarjetaUsuariosSubService {
  numeroUsuarioSub: Array<any> =[];
  constructor() {
    /*
    this.numeroUsuarioSub =[
      {
        "idNumero": 3015,
        "numero": 4789,
        "limite_credito": "340,000.00",
        "saldo_disponible":"156,000.00",
        "saldo_gastado":"230,000.00",
        "fecha_limite":"23/Abr/2023",
        "fecha_corte":"17/Ago/2024",
        "pago_minimo":"44,400.00",
        "linea_general":"53,000.00",
        "linea_asignada":"58,000.00",
        "linea_disponible":"0.00"
      },
      {
        "idNumero": 3016,
        "numero": 1109,
        "limite_credito": "220,000.00",
        "saldo_disponible":"156,400.00",
        "saldo_gastado":"130,000.00",
        "fecha_limite":"23/Sep/2023",
        "fecha_corte":"17/Oct/2024",
        "pago_minimo":"44,400.00",
        "linea_general":"53,000.00",
        "linea_asignada":"23,000.00",
        "linea_disponible":"0.00"
      },
      {
        "idNumero": 3017,
        "numero": 8712,
        "limite_credito": "330,000.00",
        "saldo_disponible":"156,340.00",
        "saldo_gastado":"110,000.00",
        "fecha_limite":"09/Abr/2023",
        "fecha_corte":"01/Mar/2024",
        "pago_minimo":"23,400.00",
        "linea_general":"93,000.00",
        "linea_asignada":"23,000.00",
        "linea_disponible":"0.00"
      },
      {
        "idNumero": 3018,
        "numero": 6354,
        "limite_credito": "457,000.00",
        "saldo_disponible":"928,000.00",
        "saldo_gastado":"981,000.00",
        "fecha_limite":"12/Feb/2023",
        "fecha_corte":"12/Ago/2024",
        "pago_minimo":"34,400.00",
        "linea_general":"12,000.00",
        "linea_asignada":"98,000.00",
        "linea_disponible":"0.00"
      },
      {
        "idNumero": 3019,
        "numero": 9876,
        "limite_credito": "591,000.00",
        "saldo_disponible":"982,000.00",
        "saldo_gastado":"235,000.00",
        "fecha_limite":"02/Dic/2023",
        "fecha_corte":"17/Ago/2024",
        "pago_minimo":"45,400.00",
        "linea_general":"89,000.00",
        "linea_asignada":"23,000.00",
        "linea_disponible":"0.00"
      }
    ]*/
  }
}
