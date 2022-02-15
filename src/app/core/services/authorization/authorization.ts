import { Observable } from 'rxjs';

export interface Authorization {

  /**
   * @returns {string | null}
   */
  getToken(): string | null;

  /**
   * @param {string} token
   */
  setToken(token: string): void;

  invalidateToken(): void;

  /**
   * @return {Observable<boolean>}
   */
  listenToAuthorized(): Observable<boolean>;

}
