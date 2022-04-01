import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

    constructor(private http: HttpClient) {}

    public getBrowseCategoryJSON(): Observable<any> {
        return this.http.get("../../assets/data/categories.json");
    }

    public getCategoryJSON(categoryName: string): Observable<any> {
        return this.http.get(`../../assets/data/categories/${categoryName}.json`);
    }

    public getBookDetailsJSON(bookId: number): Observable<any> {
        return this.http.get(`../../assets/data/books/book${bookId}.json`);
    }
}
