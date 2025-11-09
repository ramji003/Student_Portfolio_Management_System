package com.example.studentportfolio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
public class StudentController {
    @Autowired
    private StudentRepository repo;

    @PostMapping("/register")
    public Student registerStudent(@RequestBody Student student) {
        return repo.save(student);
    }

    @GetMapping("/{id}")
    public Student getStudent(@PathVariable Long id) {
        return repo.findById(id).orElse(null);
    }

    @GetMapping("/")
    public List<Student> getAllStudents() {
        return repo.findAll();
    }
}
