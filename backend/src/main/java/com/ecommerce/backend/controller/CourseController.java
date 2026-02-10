package com.ecommerce.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.ecommerce.backend.model.Course;
import com.ecommerce.backend.repository.CourseRepository;

@RestController
@RequestMapping("/api/courses")
@CrossOrigin
public class CourseController {

    @Autowired
    private CourseRepository repo;

    // Get all courses
    @GetMapping
    public List<Course> getCourses() {
        return repo.findAll();
    }

    // Get course by ID
    @GetMapping("/{id}")
    public Course getCourse(@PathVariable Long id) {
        return repo.findById(id).orElseThrow();
    }

    // Add new course
    @PostMapping
    public Course addCourse(@RequestBody Course course) {
        return repo.save(course);
    }
}
