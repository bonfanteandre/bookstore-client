import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BooksListComponent } from "./books/books-list/books-list.component";

const routes: Routes = [
    {
        path: '',
        component: BooksListComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}