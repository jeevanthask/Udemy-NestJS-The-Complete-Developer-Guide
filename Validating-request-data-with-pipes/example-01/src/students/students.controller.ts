import { Get, Controller } from '@nestjs/common';

@Controller('students')
export class StudentsController {
  @Get()
  getAllStudents() {
    return 'here are all the students';
  }
}
