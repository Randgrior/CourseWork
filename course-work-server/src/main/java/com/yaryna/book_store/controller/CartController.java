package com.yaryna.book_store.controller;

import com.yaryna.book_store.dto.BookDTO;
import com.yaryna.book_store.dto.CartDTO;
import com.yaryna.book_store.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/rest/cart")
public class CartController {

    private final CartService cartService;

    @Autowired
    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    @PostMapping("/update/{username}/book")
    public ResponseEntity<CartDTO> addBookToCart(@PathVariable String username, @RequestBody BookDTO book) {
        CartDTO cartDTO = cartService.addBook(book, username);

        return new ResponseEntity<>(cartDTO, HttpStatus.CREATED);
    }

    @GetMapping("/{username}/{book_id}")
    public Integer getBookByUser(@PathVariable String username, @PathVariable Long book_id) {
        return cartService.getCountOfBook(username, book_id);
    }

    @DeleteMapping("/{username}/{book_id}")
    public void deleteBookFromCart(@PathVariable String username, @PathVariable Long book_id) {
        cartService.deleteBookFromCart(username, book_id);
    }
}
