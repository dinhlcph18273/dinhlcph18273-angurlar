import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem("user")){
      const check = JSON.parse(localStorage.getItem("user") as string).user.role     
        if(check == 1){
          return true
        }
      }
      window.alert("không phải admin lượn!")
      window.location.href = "/signin"
    return false;
  }
}
