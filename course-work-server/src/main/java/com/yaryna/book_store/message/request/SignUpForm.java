package com.yaryna.book_store.message.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Size;
import java.util.Set;

@Getter
@Setter
public class SignUpForm {

    @Size(min = 3, max = 50)
    private String username;

    @Size(max = 60)
    private String email;

    private Set<String> role;

    @Size(min = 6, max = 40)
    private String password;

    private String phone;

}