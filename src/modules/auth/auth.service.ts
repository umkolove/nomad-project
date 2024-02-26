import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from './dto/create-user-dto';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService) {}
    async signup(userData: CreateUserDto) {
        return await this.userService.create(userData);

    }
}
  


