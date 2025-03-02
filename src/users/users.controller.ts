import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll() {
    return 'all the users are here';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post()
  createUser(@Body() body: Record<string, string>) {
    return body;
  }

  @Patch(':id')
  updateUser(
    @Param('id') id: string,
    @Body() updatedUser: Record<string, string>,
  ) {
    return { id, updatedUser };
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return { id };
  }
}
