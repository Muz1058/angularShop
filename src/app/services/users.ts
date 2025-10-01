import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Users {
  private http = inject(HttpClient);
  // ngOnInit() {
  //   this.http.get('http://localhost:3000/users', { responseType: 'json' }).subscribe((res) => {
  //     console.log(res);
  //   });
  // }

    getUsers(): Observable<any> {
    return this.http.get('http://localhost:3000/users', { responseType: 'json' });
  }
    getUserById(id:string): Observable<any> {
    return this.http.get(`http://localhost:3000/users?id=${id}`, { responseType: 'json' });
  }
}
