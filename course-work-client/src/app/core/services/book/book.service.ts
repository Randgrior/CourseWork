import {Injectable} from '@angular/core';
import {BaseHttpService} from '../base-http/base-http.service';
import {HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../../../models/common/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService extends BaseHttpService {
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token',
      'Access-Control-Allow-Origin': '*'
    })
  };

  searchCriteria: string;
  searchParameter: string;

  getAllBooks(): Observable<Book[]> {
    return this.get<Book[]>('rest/book');
  }

  getBooksByTitle(title: string): Observable<Book[]> {
    return this.get<Book[]>(`rest/book/title/${title}`);
  }

  getBooksByAuthor(author: string): Observable<Book[]> {
    return this.get<Book[]>(`rest/book/author/${author}`);
  }

  getBooksByISBN(ISBN: string): Observable<Book[]> {
    return this.get<Book[]>(`rest/book/isbn/${ISBN}`);
  }

  updateBook(book: Book): void {
    this.post<void>('rest/book/update', book, this.httpOptions).subscribe();
  }

  getMinPrice(): Observable<number> {
    return this.get<number>('rest/book/minprice');
  }

  getBooksByUser(username: string): Observable<Book[]> {
    return this.get<Book[]>(`rest/book/${username}`);
  }
}
