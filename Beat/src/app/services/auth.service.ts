import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from 'app/helpers/employee';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {}


  login(email:string, password:string ) {
    return this.http.post<Body>('http://localhost:9090/beat/api/v1/login/user', {email, password}).pipe(shareReplay())
  }



  getProfileDetails(){
    return this.http.get<Employee[]>("http://localhost:9090/beat/api/v1/employee/get").pipe(shareReplay());
  }
}