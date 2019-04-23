package com.yaryna.book_store.dao;

import com.yaryna.book_store.entity.Book;
import com.yaryna.book_store.entity.Cart;
import com.yaryna.book_store.entity.CartBook;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CartBookDAO extends JpaRepository<CartBook, Long> {

    Boolean existsCartBookByBookAndCart(Book book, Cart cart);

    CartBook findByBookAndCart(Book book, Cart cart);

    @Query(value = "select cb.count from CartBook cb " +
            "where cb.book.id= :book_id " +
            "and cb.cart.id= :cart_id")
    Integer findCountByCart_IdAndBook_Id(@Param("cart_id") Long cart_id, @Param("book_id") Long book_id);

    CartBook findByBook_IdAndCart(Long id, Cart cart);

}
