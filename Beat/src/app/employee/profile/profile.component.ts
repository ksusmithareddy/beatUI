import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, AfterViewInit{
      
  ShowHistory:boolean=false;
  showTimesheet:boolean=false;
  pc =document.getElementById("dd");

           constructor(public router : ActivatedRoute, public route: Router){}

           historyClicked(){
               this.ShowHistory=true;
           }

           timesheetClicked(){
              this.showTimesheet=true;
           }

           ngOnInit(): void {
             
           }

ngAfterViewInit(){
 console.log(this.pc);
}
}
