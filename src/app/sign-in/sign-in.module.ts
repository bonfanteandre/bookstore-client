import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { SignInComponent } from "./sign-in/sign-in.component";
import { CoreModule } from "../core/core.module";

@NgModule({
    declarations: [
        SignInComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        CoreModule
    ]
})
export class SignInModule {

}