import { Component, Input, OnInit } from '@angular/core';
import { BookCategory } from 'src/app/model/book-categorie.model';
import { AppSettingsService } from 'src/app/service/AppSettingsService.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() categoryName !:string;
  @Input() isDark !:boolean;
  responsiveOptions !:any[];
  products !:BookCategory[];
  bookId !:number;

  constructor(private appSettingsService : AppSettingsService) {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 5,
          numScroll: 1
      },
      {
          breakpoint: '768px',
          numVisible: 3,
          numScroll: 1
      },
      {
          breakpoint: '576px',
          numVisible: 1,
          numScroll: 1
      }
  ];
}

  ngOnInit(){
    this.appSettingsService.getCategoryJSON(this.categoryName).subscribe(data => {
          this.products =data.books;
          console.log(this.products);
      });
  }

  onSelectBook(id:number) {
    this.bookId =id;
  }

  getTitleColor() :string{
    return this.isDark ? 'white' : 'black'
  }

  getAuthColor() :string{
    return this.isDark ? '#82B808' : 'black'
  }

}
