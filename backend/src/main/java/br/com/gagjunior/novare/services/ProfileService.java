package br.com.gagjunior.novare.services;

import br.com.gagjunior.novare.models.Profile;
import br.com.gagjunior.novare.repositories.ProfileRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ProfileService {
    @Autowired
    private ProfileRepository profileRepository;

    public List<Profile> findAllProfiles(Pageable pageable) {
        return profileRepository.findAll(pageable).toList();
    }

    public Profile saveNewProfile(Profile profile) {
        if (profile == null) {
            return null;
        }
        return profileRepository.save(profile);
    }

    public Profile findById(Integer id){
        return profileRepository.findById(id).orElse(null);
    }
}
