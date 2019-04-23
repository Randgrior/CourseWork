package com.yaryna.book_store.converter;

import com.yaryna.book_store.dto.CartDTO;
import com.yaryna.book_store.entity.Cart;


public class CartConverter extends AbstractConverter<Cart, CartDTO> {

    @Override
    public CartDTO from(Cart item) {
        CartDTO entity = new CartDTO();
        CloneUtils.copyProps(item, entity);

        return entity;
    }

    @Override
    public Cart to(CartDTO entity) {
        Cart item = new Cart();
        CloneUtils.copyProps(entity, item);

        return item;
    }

}
