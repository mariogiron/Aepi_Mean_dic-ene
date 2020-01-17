import { StudentsService } from './../services/students.service';
import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-lista-students',
  templateUrl: './lista-students.component.html',
  styleUrls: ['./lista-students.component.css']
})
export class ListaStudentsComponent implements OnInit {

  arrStudents: Student[];

  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    this.studentsService.getAll()
      .then(students => {
        this.arrStudents = students;
      })
      .catch(err => console.log(err));
  }

}
