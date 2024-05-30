import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarjetaSubareaService {

  tarjetaSubArea:Array<any> =[]
  constructor() {
    /*
    this.tarjetaSubArea = [
      {
        "idLimiteSubArea":6000,
        "numero":2045,
        "limite_credito": "520,000.00",
        "saldo_disponible":"100,000.00",
        "saldo_gastado":"230,000.00",
        "fecha_limite":"23/Abr/2023",
        "fecha_corte":"17/Ago/2024",
        "pago_minimo":"44,400.00",
        "linea_general":"53,000.00",
        "linea_asignada":"58,000.00",
        "linea_disponible":"0.00"
      },
      {
        "idLimiteSubArea":6001,
        "numero":1734,
        "limite_credito": "580,000.00",
        "saldo_disponible":"100,000.00",
        "saldo_gastado":"230,000.00",
        "fecha_limite":"23/Abr/2023",
        "fecha_corte":"17/Ago/2024",
        "pago_minimo":"44,400.00",
        "linea_general":"53,000.00",
        "linea_asignada":"58,000.00",
        "linea_disponible":"0.00"
      },
      {
        "idLimiteSubArea":6002,
        "numero":3927,
        "limite_credito": "760,000.00",
        "saldo_disponible":"187,000.00",
        "saldo_gastado":"450,000.00",
        "fecha_limite":"01/Abr/2023",
        "fecha_corte":"17/Oct/2024",
        "pago_minimo":"90,800.00",
        "linea_general":"12,000.00",
        "linea_asignada":"90,000.00",
        "linea_disponible":"0.00"
      },
      {
        "idLimiteSubArea":6003,
        "numero":6874,
        "limite_credito": "800,000.00",
        "saldo_disponible":"203,000.00",
        "saldo_gastado":"123,000.00",
        "fecha_limite":"11/Ene/2023",
        "fecha_corte":"17/Nov/2024",
        "pago_minimo":"12,800.00",
        "linea_general":"34,000.00",
        "linea_asignada":"24,000.00",
        "linea_disponible":"0.00"
      },
      {
        "idLimiteSubArea":6004,
        "numero":3803,
        "limite_credito": "230,000.00",
        "saldo_disponible":"387,000.00",
        "saldo_gastado":"670,000.00",
        "fecha_limite":"22/May/2023",
        "fecha_corte":"10/Sep/2024",
        "pago_minimo":"11,800.00",
        "linea_general":"23,000.00",
        "linea_asignada":"56,000.00",
        "linea_disponible":"0.00"
      },
      {
        "idLimiteSubArea":6005,
        "numero":8267,
        "limite_credito": "230,000.00",
        "saldo_disponible":"234,000.00",
        "saldo_gastado":"590,000.00",
        "fecha_limite":"23/Abr/2023",
        "fecha_corte":"23/Abr/2024",
        "pago_minimo":"67,800.00",
        "linea_general":"34,000.00",
        "linea_asignada":"13,000.00",
        "linea_disponible":"0.00"
      },
      {
        "idLimiteSubArea":6006,
        "numero":6872,
        "limite_credito": "456,000.00",
        "saldo_disponible":"182,000.00",
        "saldo_gastado":"402,000.00",
        "fecha_limite":"18/Abr/2023",
        "fecha_corte":"23/Oct/2023",
        "pago_minimo":"90,800.00",
        "linea_general":"12,000.00",
        "linea_asignada":"90,000.00",
        "linea_disponible":"0.00"
      }
    ]*/
  }
}
