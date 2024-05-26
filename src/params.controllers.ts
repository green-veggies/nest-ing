import { Controller, Get, Param ,Query} from '@nestjs/common';

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
  getQuery(@Query() query:Record<string,any>){
    console.log(query)
    return "Query Success";
  }
}
