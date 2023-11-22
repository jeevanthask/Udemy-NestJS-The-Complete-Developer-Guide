import { StudentReposioty } from './students.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentsService {
  studentRepository: any;
  constructor() {
    this.studentRepository = new StudentReposioty();
  }

  getStudentById(id: string) {
    return this.studentRepository.findOne(id);
  }

  createStudent(student: any) {
    return this.studentRepository.create(student);
  }

  getAllStudents() {
    return this.studentRepository.findAll();
  }
}
