import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FriendsService } from './friends.service';
import { CreateFriendDto } from './dto/create-friend.dto';
import { UpdateFriendDto } from './dto/update-friend.dto';

@Controller('friends')
export class FriendsController {
  constructor(private readonly friendsService: FriendsService) {}

  @Post()
  async create(@Body() createFriendDto: CreateFriendDto) {
    return {
      estado: 'ok',
      data: await this.friendsService.create(createFriendDto),
    };
  }

  @Get()
  async findAll() {
    return {
      estado: 'ok',
      data: await this.friendsService.findAll(),
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return {
      estado: 'ok',
      data: await this.friendsService.findOne(+id),
    };
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateFriendDto: UpdateFriendDto,
  ) {
    return {
      estado: 'ok',
      data: await this.friendsService.update(+id, updateFriendDto),
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return {
      estado: 'ok',
      data: await this.friendsService.remove(+id),
    };
  }
}
