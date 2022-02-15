import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppService } from './core/services/app/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private appService: AppService,
  ) {}

  ngOnInit() {}

  ngOnDestroy() {}
}
