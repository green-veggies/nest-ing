import { Module } from '@nestjs/common';
import { UserController } from './users.controllers';
import { paramsControllers } from './params.controllers';

@Module({
  controllers: [UserController,paramsControllers],
})
export class AppModule {}
