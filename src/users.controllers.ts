import { Controller,Get,Req } from "@nestjs/common";
import { Request } from "express";

@Controller("/users")

export class UserController{
    // return "Hello World from GetUser";

    @Get("/profiles")
    getProfiles(@Req() req:Request) {
        // console.log(req.body);
        
        return {
            name : "Aditya",
            message : "Hello World",
        };
    }
}