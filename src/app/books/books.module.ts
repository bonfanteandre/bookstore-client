import { NgModule } from "@angular/core";
import { BooksFormModule } from "./books-form/books-form.module";
import { BooksListModule } from "./books-list/books-list.module";

@NgModule({
    imports: [
        BooksListModule,
        BooksFormModule
    ]
})
export class BooksModule {

}