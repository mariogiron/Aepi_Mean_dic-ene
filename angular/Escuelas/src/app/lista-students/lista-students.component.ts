import { StudentsService } from './../services/students.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-students',
  templateUrl: './lista-students.component.html',
  styleUrls: ['./lista-students.component.css']
})
export class ListaStudentsComponent implements OnInit {

  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    this.studentsService.getAll()
      .then(students => {
        console.log(students);
      })
      .catch(err => console.log(err));
  }

}
