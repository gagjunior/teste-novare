package br.com.gagjunior.novare.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.gagjunior.novare.models.User;

public interface UserRepository extends JpaRepository<User, Integer> {

}
