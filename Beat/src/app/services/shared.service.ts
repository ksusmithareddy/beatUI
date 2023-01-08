import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profile } from 'app/profile';
import { ProfileService } from 'app/profile.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

    //Storing update information
    empUpdate =0;
    empView=0;
    empTerminate=0;
    orgUpdate=0;
    orgTerminate=0;
    projectUpdate =0;
    projectTerminate=0;
    id! : number; 
    mid: any;
    profile!:Profile;

    constructor(private router : ActivatedRoute, private ps : ProfileService, private route :Router){}

    private emp=new BehaviorSubject<any>(this.empUpdate);
    currentEmpUpdate=this.emp.asObservable();

    setEmpUpdate (char : string){
      this.emp.next(char);
    }


    private project =new BehaviorSubject<any>(this.projectUpdate);
    currentProjectUpdate=this.project.asObservable();

    setProjectUpdate(char :string){
      this.project.next(char);
    }

    
    private org =new BehaviorSubject<any>(this.orgUpdate);
    currentOrgUpdate=this.project.asObservable();

    setOrgUpdate(char :string){
      this.project.next(char);
    }

  accessID=localStorage.getItem("accessID");
  private messageSource = new BehaviorSubject<any>(this.accessID);
  currentValue = this.messageSource.asObservable();


  passValue(ID :string){
    this.messageSource.next(ID);
  }


}