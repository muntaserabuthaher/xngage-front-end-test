import { Category } from './../../../model/categorie.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-browse-item',
  templateUrl: './browse-item.component.html',
  styleUrls: ['./browse-item.component.css']
})
export class BrowseItemComponent implements OnInit {
  @Input() category !: Category;
  cc !: Category;
  constructor() { }

  ngOnInit(): void {}

}
