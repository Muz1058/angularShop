import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { __param } from 'tslib';
import { Users } from '../services/users';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-log-in',
  imports: [RouterLink, FormsModule, NgIf],
  templateUrl: './log-in.html',
  styleUrl: './log-in.css',
})
export class LogIn {
  private userService = inject(Users);
  router = inject(Router);
  Users: object | null | any;

  userEmail: string = '';
  userPassword: string = '';

  validCredential: boolean = true;

  ngOnInit() {
    this.userService.getUsers().subscribe((res) => {
      this.Users = res;
      console.log('User by user Service', this.Users);
    });
  }

  onSubmit() {
    if (this.Users) {
      for (const u of this.Users) {
        if (this.userEmail == u.email && this.userPassword == u.password) {
          this.router.navigate(['/home'], { queryParams: { name: u.name,id:u.id } });
        }
      }
      if (this.validCredential) {
        this.validCredential = false;
        this.userEmail = '';
        this.userPassword = '';
      }
    }
    else{
      console.error("Error 500. unable to to fetch data from server")
    }
  }
  
}
