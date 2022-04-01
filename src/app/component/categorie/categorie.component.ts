import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  @Input() category !: any;

  isDark !:boolean;

  constructor() { }

  ngOnInit(): void {}

  getTitle() : string {
    return this.category.name.replace('_',' ');
  }

  getBackground() : any {
    if(this.category.backgroundImg){
      this.isDark =true;
      return `url(${this.category.backgroundImg})`;
    }else{
      this.isDark =false;
      return '#F6F6F6'
    }
  }

  getColor() :string{
    return this.isDark ? 'white' : 'black';
  }

}
