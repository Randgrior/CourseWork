package com.yaryna.book_store.service;

import com.yaryna.book_store.dto.BookDTO;
import com.yaryna.book_store.dto.CartDTO;

public interface CartService {

    void createCart(String username);

    CartDTO addBook(BookDTO book, String username);

    Integer getCountOfBook(String username, Long book_id);

    void deleteBookFromCart(String username, Long book_id);
}
