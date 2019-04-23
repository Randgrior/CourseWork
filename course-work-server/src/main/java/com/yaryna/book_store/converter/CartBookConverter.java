package com.yaryna.book_store.converter;

import com.yaryna.book_store.dto.CartBookDTO;
import com.yaryna.book_store.entity.CartBook;

public class CartBookConverter extends AbstractConverter<CartBook, CartBookDTO> {
    private BookConverter bookConverter = new BookConverter();
    private CartConverter cartConverter = new CartConverter();

    @Override
    public CartBookDTO from(CartBook item) {
        CartBookDTO entity = new CartBookDTO();
        CloneUtils.copyProps(item, entity);

        entity.setBook(bookConverter.from(item.getBook()));
        entity.setCart(cartConverter.from(item.getCart()));
        return entity;
    }

    @Override
    public CartBook to(CartBookDTO entity) {
        CartBook item = new CartBook();
        CloneUtils.copyProps(entity, item);

        return item;
    }
}
