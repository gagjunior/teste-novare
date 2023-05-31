package br.com.gagjunior.novare.controllers;

import br.com.gagjunior.novare.configuration.NovareConfiguration;
import br.com.gagjunior.novare.models.User;
import br.com.gagjunior.novare.models.dao.UserDao;
import br.com.gagjunior.novare.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "users")
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private NovareConfiguration configuration;

    @GetMapping(value = "/{id}")
    public ResponseEntity<User> findById(@PathVariable Integer id) {
        return ResponseEntity.ok().body(userService.findById(id));
    }

    @GetMapping
    public ResponseEntity<List<User>> findAllUsers(
            @RequestParam(defaultValue = "0") Integer page,
            @RequestParam(required = false) Integer size) {

        if (size == null) {
            size = configuration.getSize();
        }

        Pageable paging = PageRequest.of(page, size);
        return ResponseEntity.ok().body(userService.findAllUsers(paging));
    }

    @PostMapping
    public ResponseEntity<User> insert(@RequestBody UserDao user) {
        User newUser = userService.saveNewUser(user);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{id}").buildAndExpand(newUser.getId()).toUri();
        return ResponseEntity.created(uri).body(newUser);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<User> update(@PathVariable Integer id, @RequestBody UserDao data) {
        User user = userService.updateUser(id, data);
        return ResponseEntity.ok(user);
    }


}
