import { Module } from '@nestjs/common';
import { UserController } from './users.controllers';
import { paramsControllers } from './params.controllers';
import { userData } from './req-body.controllers';
import { crudOperations } from './crud.controllers';

@Module({
  controllers: [UserController,paramsControllers,userData,crudOperations],
})
export class AppModule {}
