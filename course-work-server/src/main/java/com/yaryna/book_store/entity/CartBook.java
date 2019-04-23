package com.yaryna.book_store.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Objects;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "cart_books")
public class CartBook {
    @EmbeddedId
    private CartBookId id;
    @Column(name = "count",
            nullable = false,
            columnDefinition = "int default 0")
    private Integer count;
    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("cartId")
    private Cart cart;
    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("bookId")
    private Book book;

    public CartBook(Cart cart, Book book) {
        this.book = book;
        this.cart = cart;
        this.id = new CartBookId(this.cart.getId(), this.book.getId());
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;

        if (o == null || getClass() != o.getClass())
            return false;

        CartBook that = (CartBook) o;
        return Objects.equals(cart, that.cart) &&
                Objects.equals(book, that.book);
    }

    @Override
    public int hashCode() {
        return Objects.hash(cart, book);
    }
}
