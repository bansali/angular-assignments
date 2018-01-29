import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() incrementCount: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }
  ref;
  count = 0;
  ngOnInit() {
  }

  startInterval() {
     this.ref = setInterval(() => { this.count++;
      // console.log(this.count);
      this.incrementCount.emit(this.count);
    }, 1000);


  }
  stopInterval() {
    clearInterval(this.ref);
  }
}
