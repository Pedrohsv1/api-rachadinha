import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RachadinhaService } from './rachadinha.service';
import { CreateRachadinhaDto } from './dto/create-rachadinha.dto';
import { UpdateRachadinhaDto } from './dto/update-rachadinha.dto';

@Controller('rachadinha')
export class RachadinhaController {
  constructor(private readonly rachadinhaService: RachadinhaService) {}

  @Post()
  async create(@Body() createRachadinhaDto: CreateRachadinhaDto) {
    return {
      estado: 'ok',
      data: await this.rachadinhaService.create(createRachadinhaDto),
    };
  }

  @Get()
  async findAll() {
    return {
      estado: 'ok',
      data: await this.rachadinhaService.findAll(),
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return {
      estado: 'ok',
      data: await this.rachadinhaService.findOne(+id),
    };
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateRachadinhaDto: UpdateRachadinhaDto,
  ) {
    return {
      estado: 'ok',
      data: await this.rachadinhaService.update(+id, updateRachadinhaDto),
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return {
      estado: 'ok',
      data: await this.rachadinhaService.remove(+id),
    };
  }
}
