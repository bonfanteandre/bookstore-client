import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BooksModule } from './books/books.module';
import { AppRoutingModule } from './app.routing.module';
import { SignInModule } from './sign-in/sign-in.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    BooksModule,
    AppRoutingModule,
    SignInModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
