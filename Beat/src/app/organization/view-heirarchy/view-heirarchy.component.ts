import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrganizationService } from 'app/services/organization.service';
import { organization } from '../organization';
@Component({
  selector: 'app-view-heirarchy',
  templateUrl: './view-heirarchy.component.html',
  styleUrls: ['./view-heirarchy.component.css']
})
export class ViewHeirarchyComponent {
  id!: number;
  org: organization =new organization();
  slab_data :any;
  showSlabDetails(){
    this.id = this.route.snapshot.params['id'];
   }
  constructor(private route: ActivatedRoute, private orgService: OrganizationService) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.org = new organization();
    this.orgService.getOrganizationById(this.id).subscribe( data => {
      this.org = data;
    });
    this.orgService.getSlabDetails(this.id).subscribe( data => {
      console.log(data)
      this.slab_data = data;
    });
  }
}