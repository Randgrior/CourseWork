package com.yaryna.book_store.service.implementation;

import com.yaryna.book_store.converter.BookConverter;
import com.yaryna.book_store.converter.CartConverter;
import com.yaryna.book_store.dao.BookDAO;
import com.yaryna.book_store.dao.CartBookDAO;
import com.yaryna.book_store.dao.CartDAO;
import com.yaryna.book_store.dao.UserDAO;
import com.yaryna.book_store.dto.BookDTO;
import com.yaryna.book_store.dto.CartDTO;
import com.yaryna.book_store.entity.Cart;
import com.yaryna.book_store.entity.CartBook;
import com.yaryna.book_store.entity.User;
import com.yaryna.book_store.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CartServiceImpl implements CartService {

    private final CartDAO cartDAO;
    private final BookDAO bookDAO;
    private final UserDAO userDAO;
    private final CartBookDAO cartBookDAO;
    private CartConverter cartConverter = new CartConverter();
    private BookConverter bookConverter = new BookConverter();

    @Autowired
    public CartServiceImpl(CartDAO cartDAO, BookDAO bookDAO, UserDAO userDAO, CartBookDAO cartBookDAO) {
        this.cartDAO = cartDAO;
        this.bookDAO = bookDAO;
        this.userDAO = userDAO;
        this.cartBookDAO = cartBookDAO;
    }

    @Override
    public void createCart(String username) {
        Optional<User> optionalUser = userDAO.findByUsername(username);
        if (optionalUser.isPresent()) {
            Cart cart = new Cart();
            cart.setUser(optionalUser.get());
            cartDAO.save(cart);
        }
    }

    @Override
    public CartDTO addBook(BookDTO book, String username) {
        Optional<Cart> optionalCart = cartDAO.findByUser_Username(username);
        if (optionalCart.isPresent()) {
            Cart cart = optionalCart.get();
            if (cartBookDAO.existsCartBookByBookAndCart(bookConverter.to(book), cart)) {
                CartBook cartBook = cartBookDAO.findByBookAndCart(bookConverter.to(book), cart);
                cartBook.setCount(cartBook.getCount() + 1);
                cartBookDAO.save(cartBook);
            } else {
                CartBook cartBook = new CartBook(cart, bookConverter.to(book));
                cartBook.setCount(1);
                cartBookDAO.save(cartBook);
            }
            return cartConverter.from(cart);
        }
        return null;
    }

    @Override
    public Integer getCountOfBook(String username, Long book_id) {
        return cartBookDAO.findCountByCart_IdAndBook_Id
                (userDAO.findByUsername(username).get().getCart().getId(), book_id);
    }

    @Override
    public void deleteBookFromCart(String username, Long book_id) {
        CartBook cartBook = cartBookDAO.findByBook_IdAndCart
                (book_id, userDAO.findByUsername(username).get().getCart());
        if (cartBook.getCount() > 1) {
            cartBook.setCount(cartBook.getCount() - 1);
            cartBookDAO.save(cartBook);
        } else {
            cartBookDAO.delete(cartBook);
        }
    }
}
