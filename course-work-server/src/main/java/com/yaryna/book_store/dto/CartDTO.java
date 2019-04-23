package com.yaryna.book_store.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class CartDTO {
    private Long id;

    private UserDTO user;

//    private List<CartBookDTO> books;
}
