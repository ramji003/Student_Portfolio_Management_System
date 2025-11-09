import { Component } from '@angular/core';

@Component({
  selector: 'app-student-profile',
  template: `
    <div>
      <h2>{{ student.name }}</h2>
      <p>{{ student.email }}</p>
    </div>
  `
})
export class StudentProfileComponent {
  student = { name: 'Example Name', email: 'email@example.com' };
}
