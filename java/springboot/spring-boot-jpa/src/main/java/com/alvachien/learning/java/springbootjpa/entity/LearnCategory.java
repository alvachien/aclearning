package com.alvachien.learning.java.springbootjpa.entity;

import javax.persistence.*;
/**
 * Created by alvachien on 2017-03-05.
 */

@Entity
@Table(name = "t_fin_learnctgy")
public class LearnCategory implements java.io.Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
}
