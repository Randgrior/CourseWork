package com.yaryna.book_store.dao;

import com.yaryna.book_store.entity.Role;
import com.yaryna.book_store.entity.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleDAO extends JpaRepository<Role, Long> {
    Optional<Role> findByName(RoleName roleName);
}

