package br.com.gagjunior.novare.services;

import br.com.gagjunior.novare.models.Profile;
import br.com.gagjunior.novare.repositories.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfileService {
    @Autowired
    private ProfileRepository profileRepository;

    public Profile saveNewProfile(Profile profile) {
        if (profile == null) {
            return null;
        }
        return profileRepository.save(profile);
    }

    public Profile findById(Integer id){
        return profileRepository.findById(id).orElse(null);
    }

    public List<Profile> findAllProfiles(){
        return profileRepository.findAll();
    }
}
