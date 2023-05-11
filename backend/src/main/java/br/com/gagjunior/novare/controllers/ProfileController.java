package br.com.gagjunior.novare.controllers;

import br.com.gagjunior.novare.models.Profile;
import br.com.gagjunior.novare.services.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "profiles")
public class ProfileController {

    @Autowired
    private ProfileService profileService;

    @GetMapping
    public ResponseEntity<List<Profile>> findAllProfiles(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "4") int size) {
        Pageable paging = PageRequest.of(page, size);
        return ResponseEntity.ok().body(profileService.findAllProfiles(paging));
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
