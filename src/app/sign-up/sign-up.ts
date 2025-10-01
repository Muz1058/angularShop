import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { min } from 'rxjs';

@Component({
  selector: 'app-signup',
   standalone: true, 
  templateUrl: './sign-up.html',
  styleUrls: ['./sign-up.css'],
  imports:[FormsModule,ReactiveFormsModule,NgClass]
})
export class SignUp {
  router=inject(Router)
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.signUpForm = this.fb.group({
      name: ['', [Validators.required,Validators.minLength(3)]],
      fatherName: ['', Validators.required,Validators.minLength(3)],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      bloodGrp: ['', Validators.required],
      password: ['', [Validators.required,Validators.minLength(5)]],
      address:this.fb.group({
        street:['',Validators.required],
        city:['',Validators.required],
        state:['',Validators.required],
        zip:['']
      })
    
    });
  }
  
  onSubmit() {
   if(this.signUpForm.valid){
     localStorage.setItem('signup form',JSON.stringify(this.signUpForm.value))
    console.log("User store in local storage",this.signUpForm.value);
    this.router.navigate(['/login'])
   }
   else{
    console.log("Form is invalid");
    
   }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    console.log('Selected file:', file);
  }
}
