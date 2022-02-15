import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment-timezone';
import { DeviceDetectorService } from 'ngx-device-detector';
import { HttpEndpoints } from '../../enums/http-endpoints.enum';
import { AppConfigInterface } from '../../types/app-config.interface';
import { AuthTokenResponseInterface } from '../../types/auth-token-response.interface';

@Injectable({
  providedIn: 'root',
})
export class DataProviderService {
  private date: Date = new Date();

  constructor(
    @Inject('AppConfig') private appConfig: AppConfigInterface,
    private http: HttpClient,
    private deviceService: DeviceDetectorService,
  ) {}

  public getMemList(
    after_meme_id: string = '',
    event_time: number = this.date.getTime(),
  ): Observable<any> {
    const url = this.buildUrl(HttpEndpoints.GET_MEMS);
    const params = this.buildHttpParams({ event_time, after_meme_id });

    return this.http.get<any>(url, { params });
  }

  public createToken(client: string): Observable<AuthTokenResponseInterface> {
    const url = this.buildUrl(HttpEndpoints.CREATE_TOKEN);
    const body = {
      device_name: this.deviceService.getDeviceInfo().device,
      ios_vendor_identifier: client,
      ios_limit_ad_tracking_enabled: true,
      ios_advertising_identifier: '00000000-0000-0000-0000-000000000000',
      model_name: this.deviceService.getDeviceInfo().device,
    };

    return this.http.post<AuthTokenResponseInterface>(url, body);
  }

  private buildUrl(path: HttpEndpoints | string, pathParams?: { [key: string]: string | number }): string {
    if (pathParams) {
      const paramKeys = Object.keys(pathParams);

      paramKeys.forEach((key: string) => {
        path = path?.replace(`:${key}`, pathParams[key].toString());
      });
    }

    return `${this.appConfig.apiUrl}${path}`;
  }

  private buildHttpParams(queryParams: { [key: string]: string | number }): HttpParams {
    const paramKeys = Object.keys(queryParams);
    let params = new HttpParams();

    paramKeys.forEach((key: string) => {
      if (queryParams[key]) {
        params = params.append(key, queryParams[key]);
      }
    });

    return params;
  }
}
