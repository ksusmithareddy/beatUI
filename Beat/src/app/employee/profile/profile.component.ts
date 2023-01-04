import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Profile } from 'app/profile';
import {ProfileService} from "../../profile.service"

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
      

           constructor(public router : ActivatedRoute, public route: Router,private ps: ProfileService){}
           profile!:Profile;


           ngOnInit(): void {
             this.ps.getEmpDetailsById(1).subscribe((x)=>{
              //this.profile=x;
              console.log(x);
            });

}
}
