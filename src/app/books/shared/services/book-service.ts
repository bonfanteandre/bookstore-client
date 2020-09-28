import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Book } from "../models/book";
import { EndpointService } from "src/app/core/services/endpoint.service";
import { UserService } from "src/app/core/user/user.service";

@Injectable({
    providedIn: 'root'
})
export class BooksService {
    
    constructor(private http: HttpClient, private endpointService: EndpointService, private userService: UserService) { }

    public getAllBooksOrderedByName(): Observable<Book[]> {
        return this.http.get<Book[]>(`${this.endpointService.getApiEndpoint()}/books`, this.getHeaders());
    }

    public find(id: string): Observable<Book> {
        return this.http.get<Book>(`${this.endpointService.getApiEndpoint()}/books/${id}`, this.getHeaders());
    }

    public delete(book: Book): Observable<any> {
        return this.http.delete(`${this.endpointService.getApiEndpoint()}/books/${book.id}`, this.getHeaders());
    }

    public add(book: Book): Observable<any> {
        return this.http.post(`${this.endpointService.getApiEndpoint()}/books`, book, this.getHeaders());
    }

    public update(book: Book): Observable<any> {
        return this.http.put(`${this.endpointService.getApiEndpoint()}/books/${book.id}`, book, this.getHeaders());
    }

    private getHeaders() {
        return {
            headers: { 
                Authorization: `Bearer ${this.userService.getToken()}`
            }
        };
    }
}