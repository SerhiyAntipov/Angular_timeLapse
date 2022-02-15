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
import { HomeComponent } from './home/home.component';

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
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
