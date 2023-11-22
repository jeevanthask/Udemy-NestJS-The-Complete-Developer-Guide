import { Injectable } from '@nestjs/common';
const jsonfile = require('jsonfile');
const file = 'students.json';

@Injectable()
export class StudentReposioty {
  findOne(id: string) {
    return 'finding one student ' + id;
  }

  async findAll() {
    let rr = await jsonfile.readFile(file);
    console.log(rr);
    return rr;
  }

  create(student: any) {
    jsonfile.readFile(file, function (err, obj) {
      if (err) console.error(err);

      student = { id: Math.floor(Math.random() * 1000), ...student };
      let newStudents = [...obj, student];
      jsonfile.writeFile(file, newStudents, function (err) {
        if (err) console.error(err);
      });
    });

    return 'student created success ';
  }
}
