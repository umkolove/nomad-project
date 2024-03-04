import { Body, Controller, Post,} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDocument } from '../database/models/user.model';
import { CreateUserDto } from './dto/create-user-dto';
  
  @Controller('auth')
  export class AuthController {
    constructor(private readonly authService: AuthService) {}

    // @Post('signup')
    // async signUp(@Body()userData: CreateUserDto): Promise<UserDocument> {
    //     return await this.authService.signup(userData);

    // }
    @Post('login')
    async login(@Body()userLogin) {
      return await this.authService.login(userLogin);
    }
  }