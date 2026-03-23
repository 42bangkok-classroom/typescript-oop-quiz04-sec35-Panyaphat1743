import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { IUser } from './user.interface'

@Controller()
export class UserController {
  constructor(private readonly userservice: UserService) {}

  @Get('users/test')
  test(): [] {
    return this.userservice.test();
  }

   @Get('users')
   getAll(): IUser[]{
    return this.userservice.findAll()
   }
}
