package com.yaryna.book_store.service;

import com.yaryna.book_store.dto.BookDTO;

import java.util.List;

public interface BookService {
    List<BookDTO> getAllBooks();

    List<BookDTO> getBooksByTitle(String title);

    List<BookDTO> getBooksByAuthor(String author);

    List<BookDTO> getBooksByISBN(String author);

    List<BookDTO> getBooksByUser(String username);

    Double getMinPrice();

    BookDTO updateBook(BookDTO bookDTO);
}
