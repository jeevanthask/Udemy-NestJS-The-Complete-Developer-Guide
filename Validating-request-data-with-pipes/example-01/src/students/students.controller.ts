import { Get, Controller, Post, Body, Param } from '@nestjs/common';
import { CreateStudentDto } from './dtos/createStudent.dto';

@Controller('students')
export class StudentsController {
  @Get()
  getAllStudents() {
    return 'here are all the students';
  }

  @Post()
  createStudent(@Body() body: CreateStudentDto) {
    console.log(body);
    return 'student created successfully';
  }

  @Get('/:id')
  getStudent(@Param('id') id: string) {
    return 'student id is ' + id;
  }
}
