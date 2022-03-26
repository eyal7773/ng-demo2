import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {

  
 user = {name: '' , email: '' , phone : 0 };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitLogin(loginFormValues:any) {
    console.log(loginFormValues)
  }

  // onSubmit({value,valid}:{value:any,valid:boolean}) {
    onSubmit(value:NgForm) {
    if(value.valid){
      console.log(value);
    }else{
      console.log("Form is invalid");
   
    }
    }
}
