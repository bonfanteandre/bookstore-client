import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BooksFormComponent } from "./books/books-form/books-form.component";
import { BooksListComponent } from "./books/books-list/books-list.component";

const routes: Routes = [
    {
        path: '',
        component: BooksListComponent
    },
    {
        path: 'form/:id',
        component: BooksFormComponent
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