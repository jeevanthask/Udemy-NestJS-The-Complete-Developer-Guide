import { Module } from '@nestjs/common';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import { StudentReposioty } from './students.repository';

@Module({
  controllers: [StudentsController],
  providers: [StudentsService, StudentReposioty],
})
export class StudentsModule {}
