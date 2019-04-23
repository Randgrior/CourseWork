package com.yaryna.book_store.converter;

import com.yaryna.book_store.dto.BookDTO;
import com.yaryna.book_store.dto.CategoryDTO;
import com.yaryna.book_store.entity.Book;
import com.yaryna.book_store.entity.Category;

import java.util.List;
import java.util.Set;

public class BookConverter extends AbstractConverter<Book, BookDTO> {

    private CategoryConverter categoryConverter = new CategoryConverter();

    @Override
    public BookDTO from(Book item) {
        BookDTO entity = new BookDTO();
        CloneUtils.copyProps(item, entity);

        Set<Category> categories = item.getCategories();
        entity.setCategories(categoryConverter.from(categories));

        return entity;
    }

    @Override
    public Book to(BookDTO entity) {

        Book item = new Book();
        CloneUtils.copyProps(entity, item);

        List<CategoryDTO> categories = entity.getCategories();
        item.setCategories(categoryConverter.to(categories));

        return item;
    }

}
