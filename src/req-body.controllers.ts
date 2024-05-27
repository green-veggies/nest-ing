import { Controller,Post,Body } from "@nestjs/common";

interface DataDTO{
    name:string,
    date:string
}

@Controller('/data')

export class userData{
    @Post('/create')
    handleUserData(@Body() user:DataDTO ){
        console.log(user.name,user.date);       
        return{
            success:true
        }
    }
}