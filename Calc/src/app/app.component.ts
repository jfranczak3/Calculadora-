import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calc';
  hipotenusa: number = 0;
  cateto1: number = 0;
  cateto2: number = 0;

  constructor(){

  }
  calcular(): number{
    let b = this.cateto1;
    let c = this.cateto2;

    if(this.hipotenusa == 0){
      this.hipotenusa = Math.pow(b, 2) + Math.pow(c, 2);
      this.hipotenusa = Math.sqrt(this.hipotenusa)
    }
    return this.hipotenusa;
  }
}
