package com.yaryna.book_store.converter;

import com.yaryna.book_store.dto.CategoryDTO;
import com.yaryna.book_store.entity.Category;

public class CategoryConverter extends AbstractConverter<Category, CategoryDTO> {
    @Override
    public CategoryDTO from(Category item) {
        CategoryDTO entity = new CategoryDTO();
        CloneUtils.copyProps(item, entity);

        return entity;
    }

    @Override
    public Category to(CategoryDTO entity) {

        Category item = new Category();
        CloneUtils.copyProps(entity, item);

        return item;
    }


}
