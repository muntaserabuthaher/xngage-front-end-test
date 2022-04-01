import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/categorie.model';
import { AppSettingsService } from 'src/app/service/AppSettingsService.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  constructor(private appSettingsService : AppSettingsService) { }
  categories !: Category[];
  ngOnInit(){
    this.appSettingsService.getBrowseCategoryJSON().subscribe(data => {
          this.categories =data.categories.slice(0, 8);
      });
  }

}
