import { Injectable } from '@angular/core';
import { DataProviderService } from '../data-provider/data-provider.service';
import { AuthorizationService } from '../authorization/authorization.service';
import { AuthTokenResponseInterface } from '../../types/auth-token-response.interface';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(
    private dataProvider: DataProviderService,
    private authorization: AuthorizationService,
  ) {
    this.initApp();
  }

  initApp() {
    if (this.authorization.getToken()) return;

    let clientId = localStorage.getItem('clientId');
    if (!clientId) {
      clientId = this.createClientId();
    }

    this.createToken(clientId);
  }

  createClientId() {
    const clientId = `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;

    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    localStorage.setItem('clientId', clientId);
    return clientId;
  }

  createToken(client: string) {
    this.dataProvider.createToken(client)
      .subscribe((resp: AuthTokenResponseInterface) => {
        if (resp.success && resp?.data?.user_device_identifier) {
          this.authorization.setToken(resp.data.user_device_identifier);
        }
      });
  }
}
