import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from './service/AppSettingsService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'BooksReviews';
  constructor() { }
  categories =[
    {name:"nonfiction" ,backgroundImg:''},
    {name:"fiction" ,backgroundImg:'../../../assets/images/fition.png'},
    {name:"children" ,backgroundImg:''},
    {name:"self_improvement" ,backgroundImg:'../../../assets/images/self-improvment.png'},
  ]
  ngOnInit(){}

}
