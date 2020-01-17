import { StudentsService } from './../services/students.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-students',
  templateUrl: './form-students.component.html',
  styleUrls: ['./form-students.component.css']
})
export class FormStudentsComponent implements OnInit {

  constructor(
    private studentsService: StudentsService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(value) {
    this.studentsService.create(value)
      .then(student => {
        console.log(student);
        this.router.navigate(['/students']);
      })
      .catch(err => console.log(err));
  }

}
