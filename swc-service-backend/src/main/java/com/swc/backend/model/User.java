package com.swc.backend.model;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;

@Entity
@Table(name = "USERS")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User implements Serializable {

	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name = "ID")
	    private Long id;

	    @Column(name = "USERNAME", nullable = false)
	    private String username;

	    @Column(name = "EMAIL", nullable = false, unique = true)
	    private String email;

	    @Column(name = "USER_PASSWORD", nullable = false)
	    private String password;

	    // getters & setters
	}

