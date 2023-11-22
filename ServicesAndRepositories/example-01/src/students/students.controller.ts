import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private studentService: StudentsService) {}

  @Get()
  getAllStudents() {
    return this.studentService.getAllStudents();
  }

  @Get('/:id')
  getStudent(@Param('id') id: string) {
    return this.studentService.getStudentById(id);
  }

  @Post()
  createStudent(@Body() body: any) {
    return this.studentService.createStudent(body);
  }
}
