import { Injectable } from '@angular/core';

import { UserState } from './user-state';
import { LocalStorage } from '../storage/local.storage.service';

@Injectable({
  providedIn: 'root',
})
export class UserService implements UserState {
  public constructor(private storage: LocalStorage) {}

  public getAuthToken(): string | null {
    return this.storage.get('token');
  }

  public setAuthToken(authToken: string): void {
    this.storage.set('token', authToken);
  }

  public clearAuthToken(): void {
    this.storage.delete('token');
  }

  public hasAuthToken(): boolean {
    return this.storage.has('token');
  }

  public getUserRoleToken(): string | null {
    return this.storage.get('role');
  }
}
