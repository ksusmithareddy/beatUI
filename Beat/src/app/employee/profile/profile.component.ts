import { AfterViewInit, Component, OnInit, SimpleChanges, DoCheck } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Profile } from 'app/profile';
import { SharedService } from 'app/services/shared.service';
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

           constructor(private sharedData :SharedService, public router : ActivatedRoute, public route: Router,private ps: ProfileService){}
           profile!:Profile;


           ngOnInit(){
            this.sharedData.currentEmpUpdate.subscribe((x)=>{
             this.getUpdateChar=x;
             console.log(this.getUpdateChar)});

            //  this.id = this.router.snapshot.params['id'];
             this.id=this.router.snapshot.paramMap.get('id');
             this.oldId = this.id;
             this.ps.getEmpDetailsById(this.id).subscribe((x) => {
               this.profile = x;
               console.log(x);
  
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

}
