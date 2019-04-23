package com.yaryna.book_store.message.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Size;

@Getter
@Setter
public class LoginForm {
    @Size(min = 3, max = 60)
    private String username;

    @Size(min = 6, max = 40)
    private String password;
}

