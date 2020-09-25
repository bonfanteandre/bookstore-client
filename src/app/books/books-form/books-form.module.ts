import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from "src/app/core/core.module";
import { BooksFormComponent } from "./books-form.component";

@NgModule({
    imports: [
        CoreModule,
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    declarations: [
        BooksFormComponent
    ],
    exports: [
        BooksFormComponent
    ]
})
export class BooksFormModule {

}