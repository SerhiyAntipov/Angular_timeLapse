import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-name',
  templateUrl: './category-name.component.html',
  styleUrls: ['./category-name.component.scss'],
})
export class CategoryNameComponent implements OnInit {
  @Input() categoryData:any;

  constructor() { }

  ngOnInit(): void {
  }
}
