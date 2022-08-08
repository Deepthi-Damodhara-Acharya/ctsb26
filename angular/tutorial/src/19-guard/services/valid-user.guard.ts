import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ValidUserGuard implements CanActivate {

  constructor(private userService:UserService, private router:Router){}

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // console.log(this.userService.user.isValid)
    // return this.userService.user.isValid;

    console.log(this.userService)
    if(this.userService.user.isValid){
      return true;
    } else {
      this.router.navigate(["/", "login"]);
      return false;
    }
  }
  
}
