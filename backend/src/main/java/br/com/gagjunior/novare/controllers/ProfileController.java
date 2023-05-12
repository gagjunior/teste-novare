package br.com.gagjunior.novare.controllers;

import br.com.gagjunior.novare.models.Profile;
import br.com.gagjunior.novare.services.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin //para controlar os dominios que tem acesso é só informar no parametro da anotação
@RestController
@RequestMapping(value = "profiles")
public class ProfileController {

    @Autowired
    private ProfileService profileService;

    @GetMapping
    public ResponseEntity<List<Profile>> findAllProfiles(){
        return ResponseEntity.ok(profileService.findAllProfiles());
    }

    @PostMapping
    public ResponseEntity<Profile> saveNewProfile(@RequestBody Profile profile) {
        Profile newProfile = profileService.saveNewProfile(profile);
        URI uri = ServletUriComponentsBuilder
                .fromCurrentRequestUri()
                .path("/{id}")
                .buildAndExpand(profile.getId())
                .toUri();
        return ResponseEntity.created(uri).body(newProfile);
    }
}
