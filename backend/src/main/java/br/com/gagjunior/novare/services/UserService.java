package br.com.gagjunior.novare.services;

import br.com.gagjunior.novare.exceptions.ResourceNotFoundException;
import br.com.gagjunior.novare.models.Profile;
import br.com.gagjunior.novare.models.User;
import br.com.gagjunior.novare.models.dao.UserDao;
import br.com.gagjunior.novare.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProfileService profileService;

    public User findById(Integer id) {
        return userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(id));
    }

    public List<User> findAllUsers(Pageable pageable) {
        return userRepository.findAll(pageable).toList();
    }

    public User saveNewUser(UserDao user) {

        Profile profile = profileService.findById(user.getProfileId());

        if (profile == null) {
            throw new ResourceNotFoundException(user.getProfileId());
        }

        User newUser = new User(user.getName(), profile, user.getEmail(), user.getPassword());
        return userRepository.save(newUser);
    }

    public void deleteUser(Integer id) {
        try {
            userRepository.deleteById(id);
        } catch (Exception e) {
            throw new ResourceNotFoundException(id);
        }
    }

    public User updateUser(Integer id, UserDao newData) {
        try {
            User user = userRepository.getReferenceById(id);
            updateData(newData, user);
            return userRepository.save(user);
        } catch (Exception e) {
            throw new ResourceNotFoundException(id);
        }
    }

    private void updateData(UserDao data, User user) {
        Profile profile = profileService.findById(data.getProfileId());

        if (profile == null) {
            throw new ResourceNotFoundException(data.getProfileId());
        }

        user.setEmail(data.getEmail());
        user.setName(data.getName());
        user.setPassword(data.getPassword());
        user.setProfile(profile);
    }

}
