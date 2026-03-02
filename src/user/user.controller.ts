import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';



@Controller('users')
export class UserController {
    constructor(private readonly userservice: UserService){}

    @Get('test')
    test(){
        return this.userservice.test();
    }

}