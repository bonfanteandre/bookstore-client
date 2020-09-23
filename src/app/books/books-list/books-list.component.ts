import { Component, OnInit } from "@angular/core";
import { Book } from "../shared/models/book";
import { BooksService } from "../shared/services/book-service";

@Component({
    selector: 'bs-books-list',
    templateUrl: 'books-list.component.html'
})
export class BooksListComponent implements OnInit {

    private books: Book[];

    constructor(private booksService: BooksService) { }
    
    ngOnInit(): void {
        this.loadBooks();
    }

    private loadBooks(): void {
        this.booksService.getAllBooksOrderedByName()
            .subscribe(books => this.books = books);
    }

}