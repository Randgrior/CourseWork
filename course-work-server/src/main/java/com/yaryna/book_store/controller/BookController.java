package com.yaryna.book_store.controller;

import com.yaryna.book_store.dto.BookDTO;
import com.yaryna.book_store.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/rest/book")
public class BookController {
    private final
    BookService bookService;

    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @PostMapping("/update")
    public void updateBook(@RequestBody BookDTO bookDTO) {
        bookService.updateBook(bookDTO);
    }

    @GetMapping("")
    public List<BookDTO> getAllBooks() {
        return bookService.getAllBooks();
    }

    @GetMapping("/minprice")
    public Double minPrice() {
        return bookService.getMinPrice();
    }

    @GetMapping("/title/{title_param}")
    public List<BookDTO> getBooksByTitle(@PathVariable String title_param) {
        return bookService.getBooksByTitle(title_param);
    }

    @GetMapping("/author/{author_param}")
    public List<BookDTO> getBooksByAuthor(@PathVariable String author_param) {
        return bookService.getBooksByAuthor(author_param);
    }

    @GetMapping("/isbn/{isbn_param}")
    public List<BookDTO> getBooksByISBN(@PathVariable String isbn_param) {
        return bookService.getBooksByISBN(isbn_param);
    }

    @GetMapping("/{username}")
    public List<BookDTO> getBookByUser(@PathVariable String username) {
        return bookService.getBooksByUser(username);
    }
}
