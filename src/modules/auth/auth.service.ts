import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from './dto/create-user-dto';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService) {}
    async signup(userData: CreateUserDto) {
        return await this.userService.create(userData);

    }

    async login(userLogin) {
        try {
            const user = await this.userService.findOneUserByEmail(userLogin.email);
            if (user) {
                if (user.password === userLogin.password) {
                    return user;
                }
            }
            return "Неверные данные для входа";
        } catch (error) {
            return error.message;
        }
        
    }

}    
