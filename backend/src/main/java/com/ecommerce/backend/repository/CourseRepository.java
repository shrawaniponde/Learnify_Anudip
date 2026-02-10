package com.ecommerce.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ecommerce.backend.model.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {}
