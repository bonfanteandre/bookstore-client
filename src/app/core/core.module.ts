import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { RouterModule } from "@angular/router";
import { ErrorsComponent } from "./components/errors/errors.component";

@NgModule({
    declarations: [
        HeaderComponent,
        ErrorsComponent
    ],
    exports: [
        HeaderComponent,
        ErrorsComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class CoreModule {

}