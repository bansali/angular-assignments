import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  visibility: boolean= false;
  btnClickArray : Array<any>= [] ;
  counter= 0;
  color= 'black';
  bgColor = 'white';
  setvisibility() {
      this.visibility = this.visibility  === true ? false : true;
      this.counter++;
      console.log(this.visibility + '  ' + this.counter);
     this.btnClickArray.push(this.counter);
     if(this.counter > 5) { this.color = 'white', this.bgColor = 'blue'}
     console.log(this.btnClickArray);
  }
}
