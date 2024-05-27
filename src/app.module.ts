import { Module } from '@nestjs/common';
import { UserController } from './users.controllers';
import { paramsControllers } from './params.controllers';
import { userData } from './req-body.controllers';

@Module({
  controllers: [UserController,paramsControllers,userData],
})
export class AppModule {}
