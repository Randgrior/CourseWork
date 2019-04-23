package com.yaryna.book_store.service.implementation;

import com.yaryna.book_store.converter.CategoryConverter;
import com.yaryna.book_store.dao.CategoryDAO;
import com.yaryna.book_store.dto.CategoryDTO;
import com.yaryna.book_store.entity.Category;
import com.yaryna.book_store.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryServiceImpl implements CategoryService {
    private final
    CategoryDAO categoryDAO;

    private CategoryConverter categoryConverter = new CategoryConverter();

    @Autowired
    public CategoryServiceImpl(CategoryDAO categoryDAO) {
        this.categoryDAO = categoryDAO;
    }

    @Override
    public List<CategoryDTO> getAllCategories() {
        List<Category> categories = categoryDAO.findAll();
        return categories.stream()
                .map((templateChecklist) -> categoryConverter.from(templateChecklist))
                .collect(Collectors.toList());
    }
}

