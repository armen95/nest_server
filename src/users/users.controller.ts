import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './users.model';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {

    constructor(private usersService: UsersService) { }

    @Post()
    Auth(@Body() payload): Promise<User> {
        return this.usersService.Auth(payload)
    }

    @Post('register')
    Register(@Body() payload): Promise<User> {
        return this.usersService.Register(payload)
    }

    @Post('login')
    Login(@Body() payload): Promise<User> {
        return this.usersService.login(payload)
    }

}
