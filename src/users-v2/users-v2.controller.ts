import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersV2Service } from './users-v2.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserV2 } from './schemas/user-v2.schema';

@Controller('users-v2')
export class UsersV2Controller {
  constructor(private readonly usersService: UsersV2Service) { }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<UserV2[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findById(@Param() { id }: { id: string }): Promise<UserV2> {
    return this.usersService.findById(id);
  }
}
