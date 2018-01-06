import { Component, OnInit } from '@angular/core';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import {FormBuilder,FormGroup,Validator} from '@angular/forms';
import { Validators } from '@angular/forms';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  constructor(private fb:FormBuilder) {
    this.form=this.fb.group({
      'email':['',[Validators.required,EmailValidator]],
      'password':['',Validators.required],
      
    });
   }

  ngOnInit() {
   
  }
  onsubmit()
  {
    if(this.form.value==null)
    {
      alert("not valid")
    }
    else
    {
   console.log(this.form.value);
   alert("success") 
  }}

}
