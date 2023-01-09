import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, OnInit, SimpleChanges, DoCheck } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Profile } from 'app/profile';
import { EmployeeService } from 'app/services/employee.service';
import { HierarchyService } from 'app/services/hierarchy.service';
import { SharedService } from 'app/services/shared.service';
import { response } from 'express';
import {ProfileService} from "../../profile.service"

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
      
 
        getUpdateChar :string='';
        id :any;
        oldId :any;
        date! : any;
        disableEmp ! :string;
        employees : any=[];
        employeeLead: any=[];
        currentEmployee: any=[];
        childrenEmployee: any=[];

           constructor( private datePipe: DatePipe, private sharedData :SharedService, public router : ActivatedRoute, public route: Router,private ps: ProfileService,
            private empService : EmployeeService, private hs :HierarchyService
           ){}
           profile!:Profile;


           ngOnInit(){
            this.sharedData.currentEmpUpdate.subscribe((x)=>{
             this.getUpdateChar=x;
            });
             this.id=this.router.snapshot.paramMap.get('id');
             this.oldId = this.id;
             this.ps.getEmpDetailsById(this.id).subscribe((x) => {
               this.profile = x;
               this.date = this.datePipe.transform(this.profile.dateOfJoining, 'yyyy-MM-dd');
             });

             this.sharedData.currentEmpDisable.subscribe(x=>{
              this.disableEmp=x;
             });
              
             this.hs.getHierarchy(this.id).subscribe((x)=>{
              this.employees=x;
              if(this.employees[0])
              {
                this.employeeLead=this.employees[0];
              }
              this.currentEmployee=this.employees[1];
              for(let i=2;i<this.employees.length;i++)
              this.childrenEmployee.push(this.employees[i]);
            }); 
            
            }

            ngDoCheck(){
              this.id=this.router.snapshot.paramMap.get('id');
              if(this.id !== this.oldId){
                this.oldId = this.id;
                this.ps.getEmpDetailsById(this.id).subscribe((x) => {
                  this.profile = x;
                  console.log(x);
     
                });
              }

            }
            // getProfileData(){
            // this.id = this.router.snapshot.params['id'];
            // this.id=this.router.snapshot.paramMap.get('id');
            // this.ps.getEmpDetailsById(this.id).subscribe((x) => {
            // this.profile = x;
            // console.log(x);
            // });
            // }

          getHistoryDetails(){
        
            this.id = this.router.snapshot.params['id'];
            this.route.navigate(['profile/history/', this.id ]);
          }

          UpdateEmp(id: number){
            this.route.navigate(['employee/update',id]);
          }

          DisableEmployee(){
            this.id = this.router.snapshot.params['id'];
            this.ps.DisableEmployee(this.id);
          }

  getDetails(id :number)
  {
    this.route.navigate(['profile/',id]);
  }
}
