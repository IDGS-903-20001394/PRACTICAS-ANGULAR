import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {

  Nombre: string = '';
  CantCompradores: number = 0;
  TarjetaCineco!: boolean;
  CantBoletos: number = 0;
  resultado: number = 0;
  error:string = '';

  calcular() {
    
    const cantPermitida = this.CantCompradores * 7;
    if(this.CantBoletos < cantPermitida){

    }else{
      this.error = 'La cantidad de boletos rebasa la permitida';
    }
  }
}
