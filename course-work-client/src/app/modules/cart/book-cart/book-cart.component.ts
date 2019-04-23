import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../../models/common/book.model';
import {TokenStorageService} from '../../../core/services/token-storage/token-storage.service';
import {CartService} from '../../../core/services/cart/cart.service';

@Component({
  selector: 'app-book-cart',
  templateUrl: './book-cart.component.html',
  styleUrls: ['./book-cart.component.css']
})
export class BookCartComponent implements OnInit {
  @Input()
  bookEntity: Book;

  constructor(
    private token: TokenStorageService,
    private cartService: CartService
  ) {
  }

  ngOnInit() {
  }

  onDelete(): void {
    this.cartService.deleteBookFromCart(this.bookEntity.id, this.token.getUsername());
  }

}
