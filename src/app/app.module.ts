import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoryNameComponent } from './components/category-name/category-name.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { AppConfigInterface } from './core/types/app-config.interface';
import { environment } from '../environments/environment';
import { DataProviderService } from './core/services/data-provider/data-provider.service';
import { AppService } from './core/services/app/app.service';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { HttpErrorInterceptor } from './core/interceptors/http-error.interceptor';
import { HomeComponent } from './home/home.component';
import { MemStoreService } from "./core/services/mem-store/mem-store.service";
// videogular
import {VgCoreModule} from "@videogular/ngx-videogular/core";
import {VgControlsModule} from "@videogular/ngx-videogular/controls";
import {VgOverlayPlayModule} from "@videogular/ngx-videogular/overlay-play";

export const APP_CONFIG: AppConfigInterface = environment;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryNameComponent,
    CardProductComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule
  ],
  providers: [
    { provide: 'AppConfig', useValue: APP_CONFIG },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
    AppService,
    DataProviderService,
    MemStoreService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
