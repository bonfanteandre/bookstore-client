import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Book } from "../shared/models/book";
import { BooksService } from "../shared/services/book-service";
import { Error } from "../shared/models/error";

@Component({
    selector: 'bs-books-form',
    templateUrl: 'books-form.component.html',
    styleUrls: ['books-form.component.css']
})
export class BooksFormComponent implements OnInit {

    private bookId: string;
    private book: Book;
    private bookForm: FormGroup;
    private currentYear: number;
    private errors: Error[] = [];

    constructor(
        private activatedRoute: ActivatedRoute, 
        private formBuilder: FormBuilder,
        private booksService: BooksService,
        private router: Router) { }
    
    ngOnInit(): void {
        this.setCurrentYear();
        this.setBookId();
        this.isNewBook() ? this.buildNewBookForm() : this.buildExistingBookForm();
    }

    private setCurrentYear(): void {
        this.currentYear = new Date().getFullYear();
    }

    private setBookId(): void {
        this.bookId = this.activatedRoute.snapshot.params.id;
    }

    private isNewBook(): boolean {
        return this.bookId == 'new';
    }

    private buildNewBookForm(): void {
        this.book = new Book();
        this.buildForm();
    }

    private buildExistingBookForm(): void {
        this.booksService
            .find(this.bookId)
            .subscribe(book => {
                this.book = book;
                this.buildForm();
            });
    }

    private buildForm(): void {
        this.bookForm = this.formBuilder.group({
            title: [this.book.title, Validators.required],
            isbn: [this.book.isbn, Validators.required],
            launchYear: [this.book.launchYear, Validators.required],
            author: [this.book.author, Validators.required],
            category: [this.book.category, Validators.required],
        });
    }

    private showInputErrorMessage(inputName: string): boolean {
        const input = this.bookForm.get(inputName);
        return input.invalid && (input.dirty || input.touched);
    }

    private saveBook(): void {
        this.fillBookFromForm();
        this.isNewBook() ? this.addBook() : this.updateBook();
    }

    private fillBookFromForm(): void {
        this.book.title = this.bookForm.get('title').value;
        this.book.isbn = this.bookForm.get('isbn').value;
        this.book.launchYear = parseInt(this.bookForm.get('launchYear').value);
        this.book.author = this.bookForm.get('author').value;
        this.book.category = this.bookForm.get('category').value;
    }

    private addBook(): void {
        this.booksService
            .add(this.book)
            .subscribe(
                () => this.bookSavedSuccessfully(), 
                res => this.setErrors(res.error));
    }

    private updateBook(): void {
        this.booksService
            .update(this.book)
            .subscribe(
                () => this.bookSavedSuccessfully(), 
                res => this.setErrors(res.error));
    }

    private bookSavedSuccessfully() : void {
        alert('Livro salvo com sucesso!');
        this.router.navigate(['books']);
    }

    private setErrors(errors: Error[]): void {
        this.errors = errors;
    }
}