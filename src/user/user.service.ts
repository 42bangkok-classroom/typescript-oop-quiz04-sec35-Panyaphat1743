import { Injectable } from '@nestjs/common';
import { IUser } from './user.interface'
import * as usersdata from '../../data/users.json'

@Injectable()
export class UserService {
  test(): [] {
    return [];
  }

  findAll():IUser[]{
    return usersdata
  }
}
