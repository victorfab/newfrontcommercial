import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  usuarios:Array<any>=[]

  constructor() {
    /*
    this.usuarios = [
      {
        "idUsuario": 1000,
        "usuario": "Issac Martínez Hérnandez",
        "idArea": 2000,
        "idNumero": 3000,
        "puesto":"SEM Especialista",

      },
      {
        "idUsuario": 1001,
        "usuario": "Beatriz Robles Cruz",
        "idArea": 2001,
        "idNumero": 3001,
        "puesto":"Project Manager",

      },
      {
        "idUsuario": 1002,
        "usuario": "María Elena Velasco Cruz",
        "idArea": 2003,
        "idNumero": 3002,
        "puesto":"Project Manager",

      },
      {
        "idUsuario":1003,
        "usuario": "Arón Padavel Sánchez",
        "idArea": 2002,
        "idNumero": 3003,
        "puesto":"Project Manager",

      },
      {
        "idUsuario":1004,
        "usuario": "Aron Cuevas Pérez",
        "idArea": 2002,
        "idNumero": 3004,
        "puesto":"SEM Especialista",
      },
      {
        "idUsuario":1005,
        "usuario": "Aron Cuevas Hernández",
        "idArea": 2000,
        "idNumero": 3005,
        "puesto":"Project Manager",
      },
      {
        "idUsuario":1006,
        "usuario": "Andrea Padavel Sánchez",
        "idArea": 2005,
        "idNumero": 3006,
        "puesto":"Project Manager",
      },
      {
        "idUsuario":1007,
        "usuario": "Estefania Sánchez Hérnandez",
        "idArea": 2005,
        "idNumero": 3007,
        "puesto":"Project Manager",
      },
      {
        "idUsuario":1008,
        "usuario": "Miranda Nieto Evangelista",
        "idArea": 2005,
        "idNumero": 3004,
        "puesto":"Project Manager",
      },
      {
        "idUsuario":1009,
        "usuario": "Victor Hugo Cuevas",
        "idArea": 2000,
        "idNumero": 3004,
        "puesto":"Project Manager",
      },
      {
        "idUsuario":1010,
        "usuario": "Miranda Nieto Evangelista",
        "idArea": 2000,
        "idNumero": 3004,
        "puesto":"Project Manager",
      },
      {
        "idUsuario":1011,
        "usuario": "Carlos Huitrón Gómez",
        "idArea": 2006,
        "idNumero": 3004,
        "puesto":"Project Manager",
      },
      {
        "idUsuario":1012,
        "usuario": "Andrea Miranda Becerril",
        "idArea": 2006,
        "idNumero": 3004,
        "puesto":"Project Manager",
      },
      {
        "idUsuario":1013,
        "usuario": "Aron Merida Velazco",
        "idArea": 2004,
        "idNumero": 3008,
        "puesto":"Project Manager",
      },
      {
        "idUsuario":1014,
        "usuario": "Martha Velasco Flores",
        "idArea": 2004,
        "idNumero": 3009,
        "puesto":"Consultant",
      },
      {
        "idUsuario":1015,
        "usuario": "Mannuel Rodriguez Cruz",
        "idArea": 2004,
        "idNumero": 3010,
        "puesto":"Senior Consultant",
      },
      {
        "idUsuario":1016,
        "usuario": "Maria Bustamante Hérnandez",
        "idArea": 2004,
        "idNumero": 3011,
        "puesto":"Consultant",
      },
      {
        "idUsuario":1017,
        "usuario": "Issac Martínez Martínez",
        "idArea": 2004,
        "idNumero": 3012,
        "puesto":"Senior Consultant",
      },
      {
        "idUsuario":1018,
        "usuario": "Victor Hugo Valdez Robles",
        "idArea": 2004,
        "idNumero": 3013,
        "puesto":"Junior Systems Engineer",
      },
      {
        "idUsuario":1019,
        "usuario": "Jacqueline Torres Marin",
        "idArea": 2004,
        "idNumero": 3014,
        "puesto":"Project Manager",
      },
      {
        "idUsuario":1020,
        "usuario": "Ernesto Valentin Osorio",
        "idArea": 2004,
        "idNumero": 3009,
        "puesto":"Systems Engineer",
      },
      {
        "idUsuario":1021,
        "usuario": "Brenda Mitchell López",
        "idArea": 2004,
        "idNumero": 3004,
        "puesto":"Software Engineer",
      },
      {
        "idUsuario":1022,
        "usuario": "Luis García Pérez",
        "idArea": 2004,
        "idNumero": 3004,
        "puesto":"Junior System Engineer",
      },
      {
        "idUsuario":1023,
        "usuario": "Alvaro Ricardo Sánchez",
        "idArea": 2004,
        "idNumero": 3004,
        "puesto":"Project Manager",
      },
      {
        "idUsuario":1024,
        "usuario": "Aron Merida Velazco",
        "idArea": 2004,
        "idNumero": 3004,
        "puesto":"Project Leader",
      }
    ];*/
   }
}
