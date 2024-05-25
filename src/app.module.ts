import { Module } from '@nestjs/common';
import { UserController } from './users.controllers';

@Module({
  controllers: [UserController],
})
export class AppModule {}
