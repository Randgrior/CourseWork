package com.yaryna.book_store.dto;

import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class BookDTO {
    private Long id;
    private String title;
    private String description;
    private String author;
    private String isbn;
    private Double price;
    private Integer stock;
    private List<CategoryDTO> categories;
//    private List<CartBookDTO> carts;

}
