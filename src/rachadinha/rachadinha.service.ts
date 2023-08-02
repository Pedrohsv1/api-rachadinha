import { Injectable } from '@nestjs/common';
import { CreateRachadinhaDto } from './dto/create-rachadinha.dto';
import { UpdateRachadinhaDto } from './dto/update-rachadinha.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rachadinha } from './entities/rachadinha.entity';

@Injectable()
export class RachadinhaService {
  constructor(
    @InjectRepository(Rachadinha) private repositorio: Repository<Rachadinha>,
  ) {}
  create(createRachadinhaDto: CreateRachadinhaDto) {
    console.log(createRachadinhaDto);
    return this.repositorio.save(createRachadinhaDto);
  }

  findAll() {
    return this.repositorio.find();
  }

  findOne(id: number) {
    return this.repositorio.findOneBy({ id: id });
  }

  update(id: number, updateRachadinhaDto: UpdateRachadinhaDto) {
    return this.repositorio.update(id, updateRachadinhaDto);
  }

  async remove(id: number) {
    return this.repositorio.delete(id);
  }
}
