import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return {
      estado: 'ok',
      data: await this.userService.create(createUserDto),
    };
  }

  @Get()
  async findAll() {
    return {
      estado: 'ok',
      data: await this.userService.findAll(),
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return {
      estado: 'ok',
      data: await this.userService.findOne(+id),
    };
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return {
      estado: 'ok',
      data: await this.userService.update(+id, updateUserDto),
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return {
      estado: 'ok',
      data: await this.userService.remove(+id),
    };
  }
}
