package br.com.gagjunior.novare.models.dao;

import lombok.Data;

@Data
public class UserDao {
    private String name;
    private Integer profileId;
    private String email;
    private String password;
}
