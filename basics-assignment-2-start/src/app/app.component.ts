import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username;
  disableStatus= true;
  usernameLength(vEvent) {
    // console.log(vEvent);
    // console.log(this.username);
    if ( this.username !== '') {
      this.disableStatus = false;
    }
    if (this.username === '') {
    this.disableStatus = true;
    }
  }
  clearUsername() {
    this.username = '';
    this.disableStatus = true;
  }
}
