import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, AfterViewInit{
      

           constructor(public router : ActivatedRoute, public route: Router){}

           ngOnInit(): void {
             
           }

ngAfterViewInit(){

}
}
