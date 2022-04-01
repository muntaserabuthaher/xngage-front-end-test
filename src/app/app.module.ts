import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';

import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// import { ProductService } from './productservice';

import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import { CarouselComponent } from './component/carousel/carousel.component';
import { BrowseComponent } from './component/browse/browse.component';
import { BrowseItemComponent } from './component/browse/browse-item/browse-item.component';
import { CategorieComponent } from './component/categorie/categorie.component';
import { DialogModule } from 'primeng/dialog';
import { DialogComponent } from './component/dialog/dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    BrowseComponent,
    BrowseItemComponent,
    CategorieComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    HttpClientModule,
    FormsModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
