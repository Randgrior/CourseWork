package com.yaryna.book_store.dto;

import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class UserDTO {
    private Long id;

    private String username;

    private String password;

    private String email;

    private String phone;

    private CartDTO cart;

    private List<RoleDTO> roles;

}
