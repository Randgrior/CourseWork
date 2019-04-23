package com.yaryna.book_store.dao;

import com.yaryna.book_store.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface BookDAO extends JpaRepository<Book, Long> {
    @Query(value = "SELECT min(price) FROM Book b WHERE b.stock > 0")
    Double getMinPrice();

    @Query(value = "select b from Book b where b.stock > 0")
    Optional<List<Book>> findAllAndStockGreaterThan(Integer stock);

    Optional<List<Book>> findBooksByTitleContainingAndStockIsGreaterThan(String title, Integer stock);

    Optional<List<Book>> findBooksByAuthorContainingAndStockIsGreaterThan(String author, Integer stock);

    Optional<List<Book>> findBooksByIsbnContainingAndStockIsGreaterThan(String ISBN, Integer stock);

    @Query(value = "select b from Book b join CartBook cartBook " +
            "on b.id=cartBook.book.id " +
            "where cartBook.cart.id = " +
            "(select id from Cart cart where cart.user.id=" +
            "(select id from User user where user.username= :username))")
    Optional<List<Book>> findBooksInCart(@Param("username") String username);

}
