import { Injectable, NotFoundException } from '@nestjs/common';
import { IUser } from './user.interface';
import usersdata from '../../data/users.json';

@Injectable()
export class UserService {
  test(): [] {
    return [];
  }

  findAll(): IUser[] {
    return usersdata;
  }

  findOne(id: string, field?: string[]): Partial<IUser> {
    const user = usersdata.find((u) => u.id === id);
    const lastans: Partial<IUser> = {};

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (!field) {
      return user;
    }

    field.forEach((i) => {
      const key = i as keyof IUser;
      if (user[key] !== undefined) {
        lastans[key] = user[key];
      }
    });
    return lastans;
  }
}
