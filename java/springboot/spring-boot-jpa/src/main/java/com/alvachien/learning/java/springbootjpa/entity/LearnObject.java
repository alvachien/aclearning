package com.alvachien.learning.java.springbootjpa.entity;

import javax.persistence.*;

/**
 * Created by alvachien on 2017-03-05.
 */
@Entity
@Table(name = "t_learn_object")
public class LearnObject implements java.io.Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
}

