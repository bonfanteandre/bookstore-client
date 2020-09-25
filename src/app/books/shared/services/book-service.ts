import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Book } from "../models/book";
import { EndpointService } from "src/app/core/services/endpoint.service";

@Injectable({
    providedIn: 'root'
})
export class BooksService {
    
    constructor(private http: HttpClient, private endpointService: EndpointService) { }

    public getAllBooksOrderedByName(): Observable<Book[]> {
        return this.http.get<Book[]>(`${this.endpointService.getApiEndpoint()}/books`);
    }

    public find(id: string): Observable<Book> {
        return this.http.get<Book>(`${this.endpointService.getApiEndpoint()}/books/${id}`);
    }

    public delete(book: Book): Observable<any> {
        return this.http.delete(`${this.endpointService.getApiEndpoint()}/books/${book.id}`);
    }

    public add(book: Book): Observable<any> {
        return this.http.post(`${this.endpointService.getApiEndpoint()}/books`, book);
    }

    public update(book: Book): Observable<any> {
        return this.http.put(`${this.endpointService.getApiEndpoint()}/books/${book.id}`, book);
    }
}