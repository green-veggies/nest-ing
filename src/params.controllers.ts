import { Controller, Get, Param } from '@nestjs/common';

@Controller('/param')
export class paramsControllers {
  @Get('/id/:id')
  getParams(@Param() params: Record<string, any>) {
    console.log(params.id);
    return {
      message: 'success',
    };
  }
}
