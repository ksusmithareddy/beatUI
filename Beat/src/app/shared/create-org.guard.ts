import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../services/auth.service"


@Injectable({
  providedIn: 'root'
})
export class CreateOrgGuard  {
  constructor(private authService : AuthService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
       
      if(this.authService.canCreateOrg())
            return true;
      
      alert("User cannot List a new Organization, Please contact admin")
      this.router.navigate(['/homepage']);
            return false;
  }
  
}
