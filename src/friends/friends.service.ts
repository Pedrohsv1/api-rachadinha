import { Injectable } from '@nestjs/common';
import { CreateFriendDto } from './dto/create-friend.dto';
import { UpdateFriendDto } from './dto/update-friend.dto';
import { Friend } from './entities/friend.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FriendsService {
  constructor(
    @InjectRepository(Friend) private repositorio: Repository<Friend>,
  ) {}
  create(createFriendDto: CreateFriendDto) {
    console.log(createFriendDto);
    return this.repositorio.save(createFriendDto);
  }

  findAll() {
    return this.repositorio.find();
  }

  findOne(id: number) {
    return this.repositorio.findOneBy({ id: id });
  }

  update(id: number, updateFriendDto: UpdateFriendDto) {
    return this.repositorio.update(id, updateFriendDto);
  }

  async remove(id: number) {
    return this.repositorio.delete(id);
  }
}
