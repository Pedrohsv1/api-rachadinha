import { PartialType } from '@nestjs/mapped-types';
import { CreateRachadinhaDto } from './create-rachadinha.dto';

export class UpdateRachadinhaDto extends PartialType(CreateRachadinhaDto) {
  value?: number;
}
