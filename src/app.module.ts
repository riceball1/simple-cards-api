import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DecksModule } from './decks/decks.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [DecksModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
