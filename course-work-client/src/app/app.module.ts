import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BookComponent} from './modules/books/book/book.component';
import {NavbarComponent} from './core/components/navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {StartPageComponent} from './modules/start-page/start-page.component';
import {BookService} from './core/services/book/book.service';
import {BaseHttpService} from './core/services/base-http/base-http.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegisterComponent} from './modules/register/register.component';
import {AuthService} from './core/services/auth/auth.service';
import {LoginComponent} from './modules/login/login.component';
import {BooksComponent} from './modules/books/books.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app-routing.module';
import {CartComponent} from './modules/cart/cart.component';
import {CartService} from './core/services/cart/cart.service';
import {BookCartComponent} from './modules/cart/book-cart/book-cart.component';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    NavbarComponent,
    StartPageComponent,
    RegisterComponent,
    LoginComponent,
    BooksComponent,
    CartComponent,
    BookCartComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [
    BaseHttpService,
    BookService,
    AuthService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
