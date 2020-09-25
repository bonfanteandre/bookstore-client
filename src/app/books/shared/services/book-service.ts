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

    public find(id: string): Observable<Book> {
        return this.http.get<Book>(`${API}/books/${id}`);
    }

    public delete(book: Book): Observable<any> {
        return this.http.delete(`${API}/books/${book.id}`);
    }

    public add(book: Book): Observable<any> {
        return this.http.post(`${API}/books`, book);
    }

    public update(book: Book): Observable<any> {
        return this.http.put(`${API}/books/${book.id}`, book);
    }
}