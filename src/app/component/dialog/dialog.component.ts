import { Component, Input, OnChanges } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { BookDetail } from 'src/app/model/book-detail.model';
import { AppSettingsService } from 'src/app/service/AppSettingsService.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnChanges {
  @Input() id !:number;
  displayBasic!: boolean;
  book !:BookDetail;
  constructor(private primengConfig: PrimeNGConfig,
              private appSettingsService : AppSettingsService) { }


  ngOnChanges(){
    this.primengConfig.ripple = true;
    this.displayBasic = true;
    this.appSettingsService.getBookDetailsJSON(this.id).subscribe(data => {
      this.book =data
  });
  }

}
