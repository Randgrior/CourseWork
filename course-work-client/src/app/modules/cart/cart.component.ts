import {Component, OnInit} from '@angular/core';
import {BookService} from '../../core/services/book/book.service';
import {Book} from '../../models/common/book.model';
import {TokenStorageService} from '../../core/services/token-storage/token-storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  books: Book[];

  constructor(
    private bookService: BookService,
    private token: TokenStorageService
  ) {
  }

  ngOnInit() {
    this.uploadBooks();
  }

  onEvent($event): void {
    if ($event) {
      setTimeout(() => {
        this.uploadBooks();
      }, 200);

    }
  }

  uploadBooks(): void {
    this.bookService.getBooksByUser(this.token.getUsername()).subscribe((bookList: Book[]) => {
      this.books = bookList;
      console.log(bookList);
    });
  }
}
