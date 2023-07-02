// Forms in angular - https://angular.io/guide/forms-overview 
// 1. template driven forms - https://angular.io/guide/forms
// 2. reactive forms - https://angular.io/guide/reactive-forms 

import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  // 1. template driven form 

  registerData: any = { username: '', password: '' };

  submitRegister = (regForm: NgForm) => {
    console.log(regForm.value);
    this.registerData = regForm.value;
    console.log(this.registerData);
  };

  // 2. reactive form 

  registerData2 = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });


  submitRegister2 = () => {
    console.log(this.registerData2.value);
  };
}


