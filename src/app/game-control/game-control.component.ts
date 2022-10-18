import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})

export class GameControlComponent implements OnInit {
  currentNumber: number = 0;
  timer;

  @Output() gameStarted = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onStart() {
    console.log('Start a timer.');
    if (this.timer) {
      console.log('The timer has been started.');
      return;
    }

    this.timer = setInterval(() => {
      this.emmitNumber();
    }, 1000);
  }

  onEnd() {
    clearInterval(this.timer);
    console.log('The timer has been ended.');
  }

  emmitNumber() {
    this.gameStarted.emit(this.currentNumber);
    this.currentNumber += 1;
  }
}
