package com.yaryna.book_store.dto;

import com.yaryna.book_store.entity.RoleName;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
class RoleDTO {
    private Long id;

    private RoleName name;

}
