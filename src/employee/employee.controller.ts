import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Req,
  Redirect,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Prisma } from '@prisma/client';
import { SkipThrottle } from '@nestjs/throttler';
import { Request } from 'express';

@SkipThrottle()
@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  create(@Body() createEmployeeDto: Prisma.UserCreateInput) {
    return this.employeeService.create(createEmployeeDto);
  }

  @SkipThrottle({ default: false })
  @Get()
  // @Redirect('https://nestjs.com', 301)
  findAll(
    @Query('role') role: 'INTERN' | 'ENGINEER' | 'ADMIN',
    @Req() request: Request,
  ) {
    // console.log(request.query);
    return this.employeeService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Query('role') role: string) {
    return this.employeeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmployeeDto: Prisma.UserUpdateInput,
  ) {
    return this.employeeService.update(+id, updateEmployeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeService.remove(+id);
  }
}
