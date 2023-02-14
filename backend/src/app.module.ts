import { Module } from '@nestjs/common';
import { WebSocketGateway } from '@nestjs/websockets';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameGateway } from './gateways/game/game.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    // Gateways
    GameGateway,
  ],
})
export class AppModule {}
