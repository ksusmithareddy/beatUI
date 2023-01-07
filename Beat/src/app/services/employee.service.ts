import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'app/employee/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private httpClient: HttpClient) {
  }
  postURL = "http://localhost:9090/beat/api/v1/employee";
  saveEmployeeData(data:any)
  {
    console.log(data);
    return this.httpClient.post(this.postURL+'/create',data);
  }
  getEmployeeList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>('http://localhost:9090/beat/api/v1/employee');
  }
  createEmployee(emp: Employee): Observable<Object>{
    return this.httpClient.post('http://localhost:9090/beat/api/v1/employee', emp);
  }
  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>('http://localhost:9090/beat/api/v1/employee'+id);
  }
  updateEmployee(id: number, emp:Employee ): Observable<Object>{
    return this.httpClient.put('http://localhost:9090/beat/api/v1/employee'+id, emp);
  }
}