import { Component } from '@angular/core';

@Component({
  selector: 'app-mn',
  standalone: false,
  templateUrl: './mn.component.html',
  styleUrl: './mn.component.css'
})
export class MnComponent {
  valor1: number = 0;
  valor2: number = 0;
  valor3: number = 0;
  maiorValor: number | null = null;
  menorValor: number | null = null;

  // Função para calcular o maior e o menor valor
  calcularMaiorMenorValor() {
    // Verifique se os valores são válidos (não são NaN ou null)
    if (this.valor1 !== null && this.valor2 !== null && this.valor3 !== null) {
      this.maiorValor = Math.max(this.valor1, this.valor2, this.valor3);
      this.menorValor = Math.min(this.valor1, this.valor2, this.valor3);
    } else {
      // Caso os valores não sejam válidos, atribua null a ambos
      this.maiorValor = null;
      this.menorValor = null;
    }
  }
}
