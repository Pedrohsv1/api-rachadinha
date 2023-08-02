import { Injectable } from '@nestjs/common';

import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private repositorio: Repository<User>) {}
  create(createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.repositorio.save(createUserDto);
  }

  findAll() {
    return this.repositorio.find();
  }

  findOne(id: number) {
    return this.repositorio.findOneBy({ id: id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.repositorio.update(id, updateUserDto);
  }

  async remove(id: number) {
    return this.repositorio.delete(id);
  }
}
