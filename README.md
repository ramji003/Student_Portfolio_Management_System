# Student Portfolio Management System

## Overview

A sample full-stack academic project for managing student portfolios.

- **Frontend:** Angular (TypeScript)
- **Backend:** Spring Boot (Java), JPA, MySQL

---

## Features

- Student Registration (Name, Email, Password)
- Student Profile Display (see profile, achievements)
- RESTful API endpoints

---

## Project Structure

```
student-portfolio/
├── backend/
│   ├── pom.xml
│   ├── application.properties
│   ├── Student.java
│   ├── StudentRepository.java
│   ├── StudentController.java
│   └── StudentPortfolioApplication.java
├── frontend/
│   ├── student-register.component.ts
│   ├── student-profile.component.ts
│   └── README.md
└── README.md
```

---

## Backend Details

- `Student.java`: Entity class for student record (name, email, password)
- `StudentRepository.java`: JPA repo for CRUD operations
- `StudentController.java`: REST endpoints for register/fetch
- `application.properties`: DB config (edit for your credentials)
- `pom.xml`: Maven dependencies

---

## Frontend Details

- `student-register.component.ts`: Component for user registration
- `student-profile.component.ts`: Component for profile display

---

## UI Screenshots (Examples)

> **Add your UI screenshots here when available!**  
> Below are real reference images you can include as links or screenshots.

### Student Registration Form

![Sample Registration Form](https://www.jotform.com/form-templates/student-registration-form)

### Student Profile/Dashboard Example

![Student Dashboard](https://dribbble.com/tags/student_dashboard)

---

## UI Layouts (ASCII Example)

**Student Registration Form**
```
+----------------------------+
|   Student Registration     |
+----------------------------+
| Name:    [______________]  |
| Email:   [______________]  |
| Password:[______________]  |
| [ Register ]               |
+----------------------------+
```

**Student Profile**
```
+-----------------------------+
|       Student Profile       |
+-----------------------------+
| Name: John Doe              |
| Email: john@email.com       |
| Achievements:               |
| - Portfolio App             |
| - Game Project              |
+-----------------------------+
```

---

## Setup Instructions

1. **Clone this repo**
   ```
   git clone https://github.com/YOUR-USERNAME/student-portfolio.git
   ```

2. **Backend**
   - Set DB credentials in `application.properties`
   - Example DB setup:
     ```
     CREATE DATABASE student_portfolio;
     ```
   - Run with Maven or your IDE.

3. **Frontend**
   - Contains Angular TypeScript skeleton code.
   - Extend and connect as needed.

---

## API Endpoints

- `POST /students/register`: Register a student
- `GET /students/{id}`: Get profile by ID
- `GET /students/`: List students

---

## Contributors

- Your Name

---

## License

This project is for academic/demo purposes only.

---
