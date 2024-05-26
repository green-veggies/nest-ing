import { Controller, Get, Param ,Query,Headers} from '@nestjs/common';
import { Agent } from 'http';

interface videoParams{
    id:number,
    name:string
};
@Controller('/url')
export class paramsControllers {
  @Get('params/:id/:name')
  getParams(@Param() params: videoParams ) {
    console.log(params.name,params.id);
    return {
      message: 'Param success',
    };
  }

  @Get('query/')
  getQuery(@Query() query:Record<string,any>,@Headers() headers:Record<string,any>){
    console.log(`Query params: `,query, `Headers: `,headers)
    return "Query Success";
  }
}
