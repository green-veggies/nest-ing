import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';

interface UserSkeleton {
  name: string;
  id: number;
  email: string;
  date: Date;
  isFresher: boolean;
}

let USER: UserSkeleton[] = [
  {
    name: 'abc',
    id: 1,
    email: 'abcd@gmail.com',
    date: new Date('2023-01-01T10:00:00Z'),
    isFresher: true,
  },
  {
    name: 'user2',
    id: 2,
    email: 'user2@gmail.com',
    date: new Date('2023-02-01T11:00:00Z'),
    isFresher: false,
  },
  {
    name: 'Adiii',
    id: 3,
    email: 'adiii@gmail.com',
    date: new Date('2023-03-01T12:00:00Z'),
    isFresher: true,
  },
  {
    name: 'Bob The Builder',
    id: 4,
    email: 'bob@gmail.com',
    date: new Date('2023-04-01T13:00:00Z'),
    isFresher: false,
  },
  {
    name: 'Charlie Sharma',
    id: 5,
    email: 'charlie@gmail.com',
    date: new Date('2023-05-01T14:00:00Z'),
    isFresher: true,
  },
];

@Controller('/crud')
export class crudOperations {
  @Post('/create')
  createOp(@Body() data: UserSkeleton) {
    USER.push(data);
    return {
      message: 'User added successfully',
    };
  }

  @Get('/getallusers')
  getAllUsers() {
    return {
      success: true,
      data: USER,
    };
  }

  @Get('/getuserbyid/:id')
  getUserById(@Param('id') param_id: string) {
    const id = Number(param_id);
    const reqData = USER.find((data) => data.id === id);
    if (!reqData) {
      return {
        success: false,
        message: `User with id ${param_id} not found`,
      };
    }
    return {
      success: true,
      data: reqData,
    };
  }

  @Put('/updateuser/:id')
  updateUserById(@Param('id') param_id: string, @Body() updateData: UserSkeleton) {
    const id = Number(param_id);
    const reqDataIndex = USER.findIndex((data) => data.id === id);
    if (reqDataIndex === -1) {
      return {
        success: false,
        message: `User with id ${param_id} not found`,
      };
    }
    USER[reqDataIndex] = updateData;
    return {
      success: true,
      message: 'User updated successfully',
    };
  }

  @Delete('/delete/:id')
  deleteById(@Param('id') param_id: string) {
    const id = Number(param_id);
    const index = USER.findIndex((user) => user.id === id);
    if (index === -1) {
      return {
        success: false,
        message: `User with id ${param_id} not found`,
      };
    }
    USER.splice(index, 1);
    return {
      success: true,
      message: 'User deleted successfully',
    };
  }
}