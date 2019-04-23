package com.yaryna.book_store.dto;

import com.yaryna.book_store.entity.CartBookId;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class CartBookDTO {
    private CartBookId id;
    private Integer count;
    private CartDTO cart;
    private BookDTO book;

}
