import {Injectable} from '@angular/core';
import {BaseHttpService} from '../base-http/base-http.service';
import {HttpHeaders} from '@angular/common/http';
import {Book} from '../../../models/common/book.model';

@Injectable({
  providedIn: 'root'
})
export class CartService extends BaseHttpService {
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token',
      'Access-Control-Allow-Origin': '*'
    })
  };

  addBookToCart(book: Book, username: string): void {
    this.post<void>(`rest/cart/update/${username}/book`, book, this.httpOptions).subscribe();
  }

  deleteBookFromCart(book_id: number, username: string): void {
    this.delete(`rest/cart/${username}/${book_id}`, this.httpOptions).subscribe();
  }
}
