package br.com.gagjunior.novare.models;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "user")
@Data
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(columnDefinition = "VARCHAR(50)")
    private String name;

    @OneToOne
    @JoinColumn(name = "profile_id")
    private Profile profile;

    @Column(columnDefinition = "VARCHAR(250)")
    private String email;
    
    @Column(columnDefinition = "VARCHAR(250)")
    private String password;

    public User(String name, Profile profile, String email, String password){
        this.name = name;
        this.profile = profile;
        this.email = email;
        this.password = password;
    }
}
