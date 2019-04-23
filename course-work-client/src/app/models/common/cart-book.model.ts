import {Cart} from './cart.model';
import {Book} from './book.model';

export interface CartBook {
  id: number;
  count: number;
  cart: Cart;
  book: Book;
}
