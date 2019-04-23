package com.yaryna.book_store.dao;

import com.yaryna.book_store.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CartDAO extends JpaRepository<Cart, Long> {

    Optional<Cart> findByUser_Username(String username);
}
