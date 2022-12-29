import { Component } from '@angular/core';

@Component({
  selector: 'app-view-heirarchy',
  templateUrl: './view-heirarchy.component.html',
  styleUrls: ['./view-heirarchy.component.css']
})
export class ViewHeirarchyComponent {
router: any;
getDiv()
{
      this.router.navigate(['/view']); // I need to get div1 of route1 here
}
}

