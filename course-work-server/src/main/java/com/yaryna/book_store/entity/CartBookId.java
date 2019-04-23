package com.yaryna.book_store.entity;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class CartBookId implements Serializable {

    @Column(name = "cart_id")
    private Long cartId;

    @Column(name = "book_id")
    private Long bookId;

}
