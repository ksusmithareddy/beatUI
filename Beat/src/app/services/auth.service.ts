import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from 'app/helpers/employee';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  access! : any;
  accessString='';
  accessArray:any[]=[];
  constructor(private http:HttpClient) {}

  isValidUser(){
    if(localStorage.getItem('jwt'))
        return true;
   return false;
  }

  canUpdateEmployee(){
    
    
    if(localStorage.getItem('accessID')!=null)
    {
    
    this.access=localStorage.getItem('accessID');
    this.accessString=this.accessString.split(',').join("");
    this.accessArray=[...this.accessString];
    console.log(this.accessArray);
    return true;
    // if(this.accessArray[])
    }
    return false;
  }
   
 
  login(email:string, password:string ) {
    return this.http.post<Body>('http://localhost:9090/beat/api/v1/login/user', {email, password}).pipe(shareReplay())
  }





  getProfileDetails(){
    return this.http.get<Employee[]>("http://localhost:9090/beat/api/v1/employee/get").pipe(shareReplay());
  }
}