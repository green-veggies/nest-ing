import {
  Controller,
  Get,
  Post,
  Req,
  HttpCode,
  HttpStatus,
  Res,
  Header,
  Redirect,
  Ip,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('/users')
export class UserController {
  // return "Hello World from GetUser";
  @Header('Cache-Control', 'none')
  @Header('X-Name', 'Aditya')
  @Get('/profiles')
  beta(@Req() req: Request) {
    // console.log(req.body);

    return {
      name: 'Aditya',
      message: 'Hello World from getProfiles',
    };
  }

  // @Redirect("/users/account",302)
  // @HttpCode(HttpStatus.NO_CONTENT)
  @Post('/create')
  @Redirect()
  alpha(@Req() req: Request) {
    const randomNum = Math.random() * 10 + 1;
    if (randomNum <= 5) {
      return {
        url: '/users/account',
        statusCode: 302,
      };
    } else {
      return {
        url: '/users/wallet',
        statusCode: 302,
      };
    }
    // res.status(201) // it is over-riding HttpStatus.NO_CONTENT
    // return{
    //     print:"Hello World from createNew"
    // };
  }
  @Get('/account')
  userAccount() {
    return '<h1>This is redirected path to accounts</h1>';
  }
  @Get('/wallet')
  userWallet() {
    return '<h1>This is redirected path to wallets</h1>';
  }
  @Get("/ip")
  getIp(@Ip() ip:string){
    return{
      success:true,
      data:ip
    }
  }
}
