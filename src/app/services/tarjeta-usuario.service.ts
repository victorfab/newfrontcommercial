import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarjetaUsuarioService {
  numeroTarjeta:Array<any> = [];
  constructor() {
    /*
    this.numeroTarjeta = [
      {
        "idNumero":3000,
        "numero": 3007,
        "limite_credito": "12,0000.00",
        "saldo_disponible":"100,000.00",
        "saldo_gastado":"420,000.00",
        "fecha_limite":"21/Feb/2023",
        "fecha_corte":"07/Mar/2023",
        "pago_minimo":"47,000.00",
        "linea_general":"50,000.00",
        "linea_asignada":"55,000.00",
        "linea_disponible":"0.00"
      },
      {
        "idNumero":3001,
        "numero": 3006,
        "limite_credito": "150,000.00",
        "saldo_disponible":"101,000.00",
        "saldo_gastado":"430,000.00",
        "fecha_limite":"01/Feb/2023",
        "fecha_corte":"17/Oct/2023",
        "pago_minimo":"44,000.00",
        "linea_general":"55,000.00",
        "linea_asignada":"59,000.00",
        "linea_disponible":"0.00"
      },
      {
        "idNumero": 3002,
        "numero": 1565,
        "limite_credito": "11,0000.00",
        "saldo_disponible":"102,000.00",
        "saldo_gastado":"480,000.00",
        "fecha_limite":"16/Feb/2023",
        "fecha_corte":"17/Nov/2023",
        "pago_minimo":"44,400.00",
        "linea_general":"53,000.00",
        "linea_asignada":"58,000.00",
        "linea_disponible":"0.00"
      },
      {
        "idNumero": 3003,
        "numero": 2304,
        "limite_credito": "11,0000.00",
        "saldo_disponible":"102,000.00",
        "saldo_gastado":"480,000.00",
        "fecha_limite":"16/Feb/2023",
        "fecha_corte":"17/Nov/2023",
        "pago_minimo":"44,400.00",
        "linea_general":"53,000.00",
        "linea_asignada":"58,000.00",
        "linea_disponible":"0.00"
      },
      {
        "idNumero": 3004,
        "numero": 4010,
        "limite_credito": "19,0000.00",
        "saldo_disponible":"102,230.00",
        "saldo_gastado":"484,000.00",
        "fecha_limite":"16/Mar/2023",
        "fecha_corte":"17/Ene/2024",
        "pago_minimo":"44,400.00",
        "linea_general":"53,000.00",
        "linea_asignada":"58,000.00",
        "linea_disponible":"0.00"
      },
      {
        "idNumero": 3005,
        "numero": 4111,
        "limite_credito": "12,30000.00",
        "saldo_disponible":"145,000.00",
        "saldo_gastado":"489,000.00",
        "fecha_limite":"06/Nov/2023",
        "fecha_corte":"17/Nov/2024",
        "pago_minimo":"56,400.00",
        "linea_general":"78,000.00",
        "linea_asignada":"58,000.00",
        "linea_disponible":"0.00"
      },
      {
        "idNumero": 3006,
        "numero": 5601,
        "limite_credito": "11,4500.00",
        "saldo_disponible":"232,000.00",
        "saldo_gastado":"230,000.00",
        "fecha_limite":"23/Feb/2023",
        "fecha_corte":"27/Sep/2023",
        "pago_minimo":"45,600.00",
        "linea_general":"23,000.00",
        "linea_asignada":"28,000.00",
        "linea_disponible":"0.00"
      },
      {
        "idNumero": 3007,
        "numero": 6091,
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
        "idNumero": 3008,
        "numero": 1235,
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
        "idNumero": 3009,
        "numero": 2090,
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
        "idNumero": 3010,
        "numero": 3498,
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
        "idNumero": 3011,
        "numero": 1209,
        "limite_credito": "591,000.00",
        "saldo_disponible":"982,000.00",
        "saldo_gastado":"235,000.00",
        "fecha_limite":"02/Dic/2023",
        "fecha_corte":"17/Ago/2024",
        "pago_minimo":"45,400.00",
        "linea_general":"89,000.00",
        "linea_asignada":"23,000.00",
        "linea_disponible":"0.00"
      },
      {
        "idNumero": 3012,
        "numero": 8102,
        "limite_credito": "567,000.00",
        "saldo_disponible":"109,000.00",
        "saldo_gastado":"430,000.00",
        "fecha_limite":"05/May/2023",
        "fecha_corte":"01/Mar/2024",
        "pago_minimo":"89,400.00",
        "linea_general":"23,000.00",
        "linea_asignada":"11,000.00",
        "linea_disponible":"0.00"
      },
      {
        "idNumero": 3013,
        "numero": 1467,
        "limite_credito": "989,000.00",
        "saldo_disponible":"123,000.00",
        "saldo_gastado":"765,000.00",
        "fecha_limite":"05/Abr/2023",
        "fecha_corte":"05/Mar/2024",
        "pago_minimo":"12,400.00",
        "linea_general":"56,000.00",
        "linea_asignada":"34,000.00",
        "linea_disponible":"0.00"
      },
      {
        "idNumero": 3014,
        "numero": 4524,
        "limite_credito": "982,000.00",
        "saldo_disponible":"912,000.00",
        "saldo_gastado":"456,000.00",
        "fecha_limite":"12/Oct/2023",
        "fecha_corte":"17/Sep/2024",
        "pago_minimo":"44,400.00",
        "linea_general":"53,000.00",
        "linea_asignada":"58,000.00",
        "linea_disponible":"0.00"
      }
    ];
*/
   }
}
