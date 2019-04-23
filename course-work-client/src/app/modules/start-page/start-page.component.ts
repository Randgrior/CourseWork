import {Component, OnInit} from '@angular/core';
import {BookService} from '../../core/services/book/book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  price: number;
  choice: string = 'Title';
  keyword: string = '';

  constructor(
    private bookService: BookService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.bookService.getMinPrice().subscribe((data: number) => {
      this.price = data;
    });
  }

  onAllBookClick(): void {
    this.bookService.getAllBooks().subscribe(book => {
      console.log(book);
      this.router.navigateByUrl('/books');
    });
  }

  onSearchClick(): void {
    // // if (this.keyword.length > 0) {
    //   if (this.choice === 'Title') {
    //     this.bookService.getBooksByTitle(this.keyword).subscribe(book => {console.log(book);
    //     });
    //   } else if (this.choice === 'Author') {
    //     this.bookService.getBooksByAuthor(this.keyword).subscribe(book => {console.log(book);
    //     });
    //   } else if (this.choice === 'ISBN') {
    //     this.bookService.getBooksByISBN(this.keyword).subscribe(book => {console.log(book);
    //     });
    //   }
    // // }
    this.bookService.searchCriteria = this.choice;
    this.bookService.searchParameter = this.keyword;
    this.router.navigateByUrl('/books');
  }

}
