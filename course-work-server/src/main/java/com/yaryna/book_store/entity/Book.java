package com.yaryna.book_store.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    private String author;
    private String isbn;
    private Double price;
    private Integer stock;
    @ManyToMany
    private Set<Category> categories;
    @OneToMany(
            mappedBy = "book")
    private List<CartBook> carts;


}
