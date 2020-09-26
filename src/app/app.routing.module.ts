import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BooksFormComponent } from "./books/books-form/books-form.component";
import { BooksListComponent } from "./books/books-list/books-list.component";
import { AuthGuard } from "./core/auth/auth.guard";
import { LoginGuard } from "./core/auth/login.guard";
import { SignInComponent } from "./sign-in/sign-in/sign-in.component";

const routes: Routes = [
    {
        path: 'sign-in',
        component: SignInComponent,
        canActivate: [LoginGuard]
    },
    {
        path: '',
        component: BooksListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'books',
        component: BooksListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'books/:id',
        component: BooksFormComponent,
        canActivate: [AuthGuard]
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