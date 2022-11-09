import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';




import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {


  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ) {}


  async signup(createUserDto: CreateUserDto){
      const user = await this.userRepository.create(createUserDto);
      await this.userRepository.save(user);
      return user;
  }

  async getProfiles(){
    const users = await this.userRepository.find();
    return users;
  }
}


