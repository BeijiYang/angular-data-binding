import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  numbers: Array<number> = [];

  onNumberEmmited(number) {
    console.log(number);
    this.numbers.push(number);
  }

  ngOnDestroy() {
    this.numbers = [];
    console.log('clear numbers array');
    console.log(this.numbers);
  }
}
