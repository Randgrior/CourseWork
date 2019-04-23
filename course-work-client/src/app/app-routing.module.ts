import {Routes} from '@angular/router';
import {StartPageComponent} from './modules/start-page/start-page.component';
import {RegisterComponent} from './modules/register/register.component';
import {BooksComponent} from './modules/books/books.component';
import {LoginComponent} from './modules/login/login.component';
import {CartComponent} from './modules/cart/cart.component';
import {AuthGuard} from './core/guards/auth.guard';

export const ROUTES: Routes = [
  {
    path: '',
    component: StartPageComponent
  },

  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'books',
    component: BooksComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
    canLoad: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
