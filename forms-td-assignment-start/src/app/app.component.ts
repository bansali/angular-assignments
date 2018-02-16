import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
defaultChoice = 'advanced';
@ViewChild('f') form: NgForm;
formSubmitted() {
  console.log(this.form.value);
}
}
