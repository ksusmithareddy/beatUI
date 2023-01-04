
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { organization } from '../organization/create-organization/organization';
@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  constructor(private httpClient: HttpClient) {
  }
  postURL = "http://localhost:9090/beat/api/v1/project";
  saveOrganizationData(data:any)
  {
    console.log(data);
    return this.httpClient.post(this.postURL+'/create',data);
  }
  getOrganizationsList(): Observable<organization[]>{
    return this.httpClient.get<organization[]>('http://localhost:9090/beat/api/v1/project');
  }
  createOrganization(org: organization): Observable<Object>{
    return this.httpClient.post('http://localhost:8080/beat/api/v1/organization/create', org);
  }
  getOrganizationById(id: number): Observable<organization>{
    return this.httpClient.get<organization>('http://localhost:9090/beat/api/v1/project'+id);
  }
  updateOrganization(id: number, org: organization): Observable<Object>{
    return this.httpClient.put('http://localhost:9090/beat/api/v1/project'+id, org);
  }
}









