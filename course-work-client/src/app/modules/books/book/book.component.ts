import {Component, Input, OnInit} from '@angular/core';
import {BookService} from '../../../core/services/book/book.service';
import {Book} from '../../../models/common/book.model';
import {TokenStorageService} from '../../../core/services/token-storage/token-storage.service';
import {CartService} from '../../../core/services/cart/cart.service';
import {Router} from '@angular/router';

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
    private cartService: CartService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  onAddToCart(): void {
    if (this.token.getUsername() != null) {
      this.bookEntity.stock--;
      this.bookService.updateBook(this.bookEntity);
      this.cartService.addBookToCart(this.bookEntity, this.token.getUsername());
    } else {
      const confirmValue = confirm('You want to add book in a cart. Go to Login page?');
      if (confirmValue) {
        this.router.navigateByUrl('/login');
      }
    }
  }

}
