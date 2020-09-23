import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BooksListComponent } from "./books-list.component";

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    declarations: [
        BooksListComponent
    ],
    exports: [
        BooksListComponent
    ]
})
export class BooksListModule {

}