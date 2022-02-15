import {
  ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AuthorizationService } from '../services/authorization/authorization.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authStorage: AuthorizationService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authStorage.listenToAuthorized().pipe(
      filter((isAuth: boolean) => isAuth),
    );
  }
}
