import {Component, Input, OnInit} from '@angular/core';
import {BookService} from '../../../core/services/book/book.service';
import {Book} from '../../../models/common/book.model';
import {TokenStorageService} from '../../../core/services/token-storage/token-storage.service';
import {CartService} from '../../../core/services/cart/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input()
  bookEntity: Book;

  constructor(
    private bookService: BookService,
    private token: TokenStorageService,
    private cartService: CartService
  ) {
  }

  ngOnInit() {
  }

  onAddToCart(): void {
    this.bookEntity.stock--;
    this.bookService.updateBook(this.bookEntity);
    if (this.token.getUsername() != null) {
      this.cartService.addBookToCart(this.bookEntity, this.token.getUsername());
    }
  }

}
