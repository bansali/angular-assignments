import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  even: boolean ;
  odd: boolean;
  evenNumbers: Array<number> = [] ;
  oddNumbers: Array<number> = [] ;
  // curNum;
  checkCounterValue(vEvent) {
    console.log(vEvent);
    // this.curNum = vEvent;
    if (vEvent % 2 === 0) {this.even = true; this.odd = false;
      this.evenNumbers.push(vEvent);
    }else {this.even = false; this.odd = true; this.oddNumbers.push(vEvent); }
  }
}
