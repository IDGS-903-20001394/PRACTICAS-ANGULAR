import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia2p',
  templateUrl: './distancia2p.component.html',
  styleUrls: ['./distancia2p.component.css']
})
export class Distancia2pComponent {
  x1!: number;
  y1!: number;
  x2!: number;
  y2!: number;

  resultado: number = 0;

  calcular() { 
    const betaRes = Math.pow((this.x2 - this.x1),2) + Math.pow((this.y2 - this.y1),2)
    this.resultado = Math.sqrt(betaRes)
  }

}
