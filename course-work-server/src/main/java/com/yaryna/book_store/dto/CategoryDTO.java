package com.yaryna.book_store.dto;

import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class CategoryDTO {
    private Long id;
    private String name;
    private List<BookDTO> books;

    public CategoryDTO(Long id, String name) {
        this.id = id;
        this.name = name;
    }
}
