import {Component, OnInit} from '@angular/core';
import {BookService} from '../../core/services/book/book.service';
import {Book} from '../../models/common/book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[];
  choice = 'Title';
  keyword: string = '';


  constructor(
    private bookService: BookService
  ) {
  }

  ngOnInit(): void {
    console.log('this.bookService.searchCriteria' + this.bookService.searchCriteria);
    console.log('this.bookService.searchParameter' + this.bookService.searchParameter);
    if (this.bookService.searchCriteria === undefined) {
      this.bookService.getAllBooks().subscribe((bookList: Book[]) => {
        this.books = bookList;
      });
    } else {
      this.getChoice(this.bookService.searchCriteria, this.bookService.searchParameter);
      this.bookService.searchCriteria = undefined;
      this.bookService.searchParameter = undefined;
    }
  }

  onSearchClick(): void {
    if (this.keyword.trimRight().length > 0) {
      this.getChoice(this.choice, this.keyword);
    }
  }

  onAllClick(): void {
    this.bookService.getAllBooks().subscribe((bookList: Book[]) => {
      this.books = bookList;
    });
  }

  getChoice(choice: string, keyword: string): void {
    if (choice === 'Title') {
      this.bookService.getBooksByTitle(keyword).subscribe((bookList: Book[]) => {
        this.books = bookList;
      });
    } else if (choice === 'Author') {
      this.bookService.getBooksByAuthor(keyword).subscribe((bookList: Book[]) => {
        this.books = bookList;
      });
    } else if (choice === 'ISBN') {
      this.bookService.getBooksByISBN(keyword).subscribe((bookList: Book[]) => {
        this.books = bookList;
      });
    }

  }
}
