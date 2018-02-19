import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signUpForm: FormGroup;
  pStatus: ['stable' , 'critical' , 'finished'];
  ngOnInit( ) {
  this.signUpForm = new FormGroup({
    'projectName' : new FormControl (null, Validators.required, this.forbiddenName),
    'email': new FormControl ( null , [Validators.required, Validators.email]),
    'pStatus': new FormControl ( 'critical'  )

  });
  }
  forbiddenName(control: FormControl): Promise<any> | Observable<any> {
  const promise = new  Promise<any> ((resolve, reject) => {
    if (control.value === 'test') {
      resolve({'forbiddenName': true});
    }else {
      resolve(null);
    }
  });
return promise;
  }
  onSubmit( ) {
    console.log(this.signUpForm.value);
  }

}
