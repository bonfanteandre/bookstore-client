import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Book } from "../shared/models/book";
import { BooksService } from "../shared/services/book-service";

@Component({
    selector: 'bs-books-list',
    templateUrl: 'books-list.component.html'
})
export class BooksListComponent implements OnInit {

    private books: Book[];

    constructor(private booksService: BooksService, private router: Router) { }
    
    ngOnInit(): void {
        this.loadBooks();
    }

    private loadBooks(): void {
        this.booksService.getAllBooksOrderedByName()
            .subscribe(books => this.books = books);
    }

    private addBook(): void {
        this.router.navigate(['form', 'new']);
    }

    private editBook(book: Book): void {
        this.router.navigate(['form', book.id]);
    }

    private deleteBook(book: Book): void {
        let deleteBook = confirm(`Deseja remover ${book.title}?`);
        if (deleteBook) {
            this.booksService
                .delete(book)
                .subscribe(() => this.loadBooks())
        }
    }
}