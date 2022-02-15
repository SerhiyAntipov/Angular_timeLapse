import { Injectable } from '@angular/core';
import {
  HttpInterceptor, HttpRequest, HttpHandler, HttpEvent,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import * as moment from 'moment-timezone';
import { DeviceDetectorService } from 'ngx-device-detector';
import { AuthorizationService } from '../services/authorization/authorization.service';
import { WebApiIdentifier } from '../../constants';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private date: Date = new Date();

  constructor(
    private auth: AuthorizationService,
    private deviceService: DeviceDetectorService,
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return of(this.auth.getToken())
      .pipe(
        mergeMap(
          (token) => {
            if (token) {
              request = request.clone({
                setHeaders: {
                  'User-Device-Identifier': token || '',
                  'MemesHub-User-Agent': `ios/15.2.1 com.meedmobile.flowerTimeLaps/1.1.${WebApiIdentifier}`,
                  'MemesHub-Device-Model': this.deviceService.getDeviceInfo().device,
                  'MemesHub-Device-Language': navigator.language,
                  'MemesHub-Device-TimeZone': `${moment.tz.guess()};${this.date.getTimezoneOffset()}`,
                },
              });
            } else {
              request = request.clone({
                setHeaders: {
                  'MemesHub-User-Agent': `ios/15.2.1 com.meedmobile.flowerTimeLaps/1.1.${WebApiIdentifier}`,
                },
              });
            }

            return next.handle(request);
          },
        ),
      );
  }
}
