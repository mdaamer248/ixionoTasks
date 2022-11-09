import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  BadRequestException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';


@ApiTags('User')
@Controller('User')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Post('/submit-profile')
  async signup(@Body() createUserDto: CreateUserDto) {
    const user = await this.userService.signup(createUserDto);
    return user;
  }

 

  @Get('/get-profiles')
  async getProfiles() {
    const users = await this.userService.getProfiles();
    return users;
  }
}
