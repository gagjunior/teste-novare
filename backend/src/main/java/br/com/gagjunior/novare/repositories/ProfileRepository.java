package br.com.gagjunior.novare.repositories;

import br.com.gagjunior.novare.models.Profile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfileRepository extends JpaRepository<Profile, Integer> {
}
