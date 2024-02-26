import { Injectable } from '@nestjs/common';
import { UserRepository } from '../database/repositories/user.repository';
import { UserDocument } from '../database/models/user.model';
import { CrudService } from '../../helpers/crud.service';
import { CreateUserDto } from '../auth/dto';

@Injectable()
export class UsersService extends CrudService<UserDocument> {
  constructor(readonly userRepository: UserRepository) {
    super(userRepository);
  }

  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.create(createUserDto);
  }
}
