import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Authorization } from './authorization';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService implements Authorization {
  private readonly authorized$: BehaviorSubject<boolean>;

  constructor(private userState: UserService) {
    this.authorized$ = new BehaviorSubject(this.userState.hasAuthToken());
  }

  public getToken(): string | null {
    return this.userState.getAuthToken();
  }

  public setToken(token: string): void {
    this.userState.setAuthToken(token);
    this.authorized$.next(true);
  }

  public invalidateToken(): void {
    this.userState.clearAuthToken();
    this.authorized$.next(false);
  }

  public listenToAuthorized(): Observable<boolean> {
    return this.authorized$;
  }
}
