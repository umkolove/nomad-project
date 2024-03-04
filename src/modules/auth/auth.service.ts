// import { Injectable } from '@nestjs/common';
// import { UsersService } from '../users/users.service';
// import { CreateUserDto } from './dto/create-user-dto';

// @Injectable()
// export class AuthService {
//     constructor(private readonly userService: UsersService) {}
//     async signup(userData: CreateUserDto) {
//         return await this.userService.create(userData);

//     }

//     async login(userLogin) {
//         try {
//             const user = await this.userService.findOneUserByEmail(userLogin.email);
//             if (user) {
//                 if (user.password === userLogin.password) {
//                     return user;
//                 }
//             }
//             return "Неверные данные для входа";
//         } catch (error) {
//             return error.message;
//         }
        
//     }

// }    

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(login: string, password: string): Promise<any> {
    try {
      const user = await this.usersService.findOne({ login, password });
      if (!user) {
        return null;
      }
      return user;
    } catch (error) {
      return error.data;
    }
  }

  login(userData: any) {
    const { login } = userData;
    const payload = { login };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
