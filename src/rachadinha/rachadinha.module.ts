import { Module } from '@nestjs/common';
import { RachadinhaService } from './rachadinha.service';
import { RachadinhaController } from './rachadinha.controller';
import { Rachadinha } from './entities/rachadinha.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Rachadinha])],
  controllers: [RachadinhaController],
  providers: [RachadinhaService],
})
export class RachadinhaModule {}
