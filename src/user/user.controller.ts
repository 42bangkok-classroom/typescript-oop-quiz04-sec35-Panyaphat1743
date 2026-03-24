import { Controller, Get, Param, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { IUser } from './user.interface';

@Controller()
export class UserController {
  constructor(private readonly userservice: UserService) {}

  @Get('users/test')
  test(): [] {
    return this.userservice.test();
  }

  @Get('users')
  getAll(): IUser[] {
    return this.userservice.findAll();
  }

  @Get('users/:id')
  findOne(@Param('id') id: string, @Query('fields') fields?: string) {
    if (!fields) {
      return this.userservice.findOne(id);
    }else {
      const newfields = fields.split(',');
      return this.userservice.findOne(id, newfields);
    }
  }
}
