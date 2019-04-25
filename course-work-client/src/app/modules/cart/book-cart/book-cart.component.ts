import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from '../../../models/common/book.model';
import {TokenStorageService} from '../../../core/services/token-storage/token-storage.service';
import {CartService} from '../../../core/services/cart/cart.service';
import {count} from 'rxjs/operators';

@Component({
  selector: 'app-book-cart',
  templateUrl: './book-cart.component.html',
  styleUrls: ['./book-cart.component.css']
})
export class BookCartComponent implements OnInit {
  @Input()
  bookEntity: Book;

  @Output()
  isReloadEvent = new EventEmitter<boolean>();
  constructor(
    private token: TokenStorageService,
    private cartService: CartService
  ) {
  }

  ngOnInit() {
  }

  onDelete(): void {
    this.cartService.getCountOBook(this.bookEntity.id, this.token.getUsername()).subscribe((countOfBook: number) => {
      if (countOfBook === 1) {
        console.log('here');
        this.cartService.deleteBookFromCart(this.bookEntity.id, this.token.getUsername());
        this.isReloadEvent.emit(true);
        } else {
        this.cartService.deleteBookFromCart(this.bookEntity.id, this.token.getUsername());
      }
    });
  }

}
