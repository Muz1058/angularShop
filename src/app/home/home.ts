import { CommonModule, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink, JsonPipe,CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  router=inject(Router)
  route = inject(ActivatedRoute);
  userName: string | null = '';
  userId:string|null=''
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.userName = params['name'];
      this.userId = params['id'];

      console.log("User Name ::",this.userName);
      console.log("User id ::",this.userId);
      
    });
  }
  gotologin(){
    this.router.navigate(['/login'])
  }
  viewProfile(){
    this.router.navigate(['/profile'],{queryParams:{id:this.userId}})
  }
}
