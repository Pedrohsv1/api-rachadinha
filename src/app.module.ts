import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FriendsModule } from './friends/friends.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './ormconfig';
import { UserModule } from './user/user.module';
import { RachadinhaModule } from './rachadinha/rachadinha.module';

@Module({
  imports: [
    FriendsModule,
    UserModule,
    RachadinhaModule,
    TypeOrmModule.forRoot(config),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
