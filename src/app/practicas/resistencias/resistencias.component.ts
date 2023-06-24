import { Component } from '@angular/core';

@Component({
  selector: 'app-resistencias',
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})
export class ResistenciasComponent {
  Banda1!: string;
  Banda2!: string;
  Banda3!: string;
  Banda4!: string;
  V1!: number;
  V2!: number;
  V3!: number;
  bg1!: string;
  bg2!: string;
  bg3!: string;
  Valor: string = '';
  ToleranciaMin!: number;
  ToleranciaMax!: number;

  coloresBanda=[
    ["Negro", "#000000", "white"],
    ["Café", "#964B00", "white"],
    ["Rojo", "#FF0000", "white"],
    ["Naranja", "#FFA500", "black"],
    ["Amarillo", "#FFFF00", "black"],
    ["Verde", "#008000", "white"],
    ["Azul", "#0000FF", "white"],
    ["Violeta", "#800080", "white"],
    ["Gris", "#808080", "white"],
    ["Blanco", "#FFFFFF", "black"]
  ]

  calcular(){
    this.Valor = "";

    switch (this.Banda1){
      case "Negro": this.V1 = 0, this.Valor += "0", this.bg1="#000000" ; break;
      case "Café": this.V1 = 1, this.Valor += "1"; this.bg1="#964B00"; break;
      case "Rojo": this.V1 = 2, this.Valor += "2"; this.bg1="#FF0000"; break;
      case "Naranja": this.V1 = 3, this.Valor += "3"; this.bg1="#FFA500"; break;
      case "Amarillo": this.V1 = 4, this.Valor += "4"; this.bg1="#FFFF00"; break;
      case "Verde": this.V1 = 5, this.Valor += "5"; this.bg1="#008000"; break;
      case "Azul": this.V1 = 6, this.Valor += "6"; this.bg1="#0000FF"; break;
      case "Violeta": this.V1 = 7, this.Valor += "7"; this.bg1="#800080"; break;
      case "Gris": this.V1 = 8, this.Valor += "8"; this.bg1="#808080"; break;
      case "Blanco": this.V1 = 9, this.Valor += "9"; this.bg1="#FFFFFF"; break;
    }

    switch (this.Banda2){
      case "Negro": this.V2 = 0, this.Valor += "0",   this.bg2="#000000"; break;
      case "Café": this.V2 = 1, this.Valor += "1";    this.bg2="#964B00"; break;
      case "Rojo": this.V2 = 2, this.Valor += "2";    this.bg2="#FF0000"; break;
      case "Naranja": this.V2 = 3, this.Valor += "3"; this.bg2="#FFA500"; break;
      case "Amarillo": this.V2 = 4, this.Valor += "4";this.bg2="#FFFF00"; break;
      case "Verde": this.V2 = 5, this.Valor += "5";   this.bg2="#008000"; break;
      case "Azul": this.V2 = 6, this.Valor += "6";    this.bg2="#0000FF"; break;
      case "Violeta": this.V2 = 7, this.Valor += "7"; this.bg2="#800080"; break;
      case "Gris": this.V2 = 8, this.Valor += "8";    this.bg2="#808080"; break;
      case "Blanco": this.V2 = 9, this.Valor += "9";  this.bg2="#FFFFFF"; break;
    }

    switch (this.Banda3){
      case "Negro": this.V3 = 0; this.bg3="#000000"; break;
      case "Café": this.V3 = 10, this.Valor += "0"; this.bg3="#964B00";  break;
      case "Rojo": this.V3 = 100, this.Valor += "00"; this.bg3="#FF0000";  break;
      case "Naranja": this.V3 = 1000, this.Valor += "000"; this.bg3="#FFA500"; break;
      case "Amarillo": this.V3 = 10000, this.Valor += "0000"; this.bg3="#FFFF00";  break;
      case "Verde": this.V3 = 100000, this.Valor += "00000"; this.bg3="#008000"; break;
      case "Azul": this.V3 = 1000000, this.Valor += "000000";  this.bg2="#0000FF"; break;
      case "Violeta": this.V3 = 10000000, this.Valor += "0000000"; this.bg3="#800080"; break;
      case "Gris": this.V3 = 100000000, this.Valor += "00000000"; this.bg3="#808080"; break;
      case "Blanco": this.V3 = 1000000000,this.Valor += "000000000"; this.bg3="#FFFFFF"; break;
    }
    
    switch (this.Banda4){
      case "Oro": 
        this.ToleranciaMin =  parseInt(this.Valor) - (parseInt(this.Valor) * 5 / 100) 
        this.ToleranciaMax =  parseInt(this.Valor) + (parseInt(this.Valor) * 5 / 100) 
        break;
      case "Plata": 
        this.ToleranciaMin =  parseInt(this.Valor) - (parseInt(this.Valor) * 10 / 100) 
        this.ToleranciaMax =  parseInt(this.Valor) + (parseInt(this.Valor) * 10 / 100) 
        break;
    }

  }

}
