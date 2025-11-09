import { Component } from '@angular/core';

@Component({
  selector: 'app-student-register',
  template: `
    <form>
      <input placeholder="Name" [(ngModel)]="student.name" name="name">
      <input placeholder="Email" [(ngModel)]="student.email" name="email">
      <input placeholder="Password" [(ngModel)]="student.password" name="password" type="password">
      <button (click)="registerStudent()">Register</button>
    </form>
  `
})
export class StudentRegisterComponent {
  student = { name: '', email: '', password: '' };

  registerStudent() {
    // Here you would add HTTP request to backend
    console.log("Student registered:", this.student);
  }
}
