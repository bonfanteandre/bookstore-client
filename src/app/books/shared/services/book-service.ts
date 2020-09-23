import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Book } from "../models/book";

const API = 'http://localhost:5000';

@Injectable({
    providedIn: 'root'
})
export class BooksService {
    
    constructor(private http: HttpClient) { }

    public getAllBooksOrderedByName(): Observable<Book[]> {
        return this.http.get<Book[]>(`${API}/books`);
    }
}