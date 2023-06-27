import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {

  Nombre: string = '';
  CantCompradores: number = 0;
  TarjetaCineco: string = 'false';
  CantBoletos: number = 0;
  BoletosComprados: number = 0;
  NombreComprador: string = '';
  resultado: number = 0;
  error:string = '';

  calcular() {
    const precioBoletos = 12;
    const cantPermitida = this.CantCompradores * 7;
    const totalBoletos = this.CantBoletos * precioBoletos;    

    if(this.CantBoletos < cantPermitida){
      this.error = '';
      this.BoletosComprados = this.CantBoletos;
      this.NombreComprador;
      if(this.CantBoletos > 5){
        this.resultado = totalBoletos - (totalBoletos * .15)
      }else if(this.CantBoletos >= 3 && this.CantBoletos <= 5){
        this.resultado = totalBoletos - (totalBoletos * .10)
      }else{
        this.resultado = totalBoletos;
      }

      if(this.TarjetaCineco == 'true'){
        this.resultado = this.resultado - (this.resultado * .10)
      }
      this.resultado = parseFloat(this.resultado.toFixed(2));

    }else{
      this.error = 'La cantidad de boletos rebasa la permitida. \n La cantidad permitida es de: ' + cantPermitida + ' boletos.';
    }
  }
}
