import { JsonPipe } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Users } from '../services/users';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-profile',
  imports: [JsonPipe, NgIf],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  private userService = inject(Users);
  private route = inject(ActivatedRoute);
  private cdr=inject(ChangeDetectorRef)
  user: any;
  id = '';
  ngOnInit() {
    this.route.queryParams.subscribe((res) => {
      this.id = res['id']; // will be "1"
      console.log("User id from profile ::",this.id);
      
      this.userService.getUserById(this.id).subscribe((user) => {
        this.user = user[0];
        this.cdr.detectChanges()
        console.log('User from profile', this.user);
      });
    });
  }
}
