import { Model, Types } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserV2 } from './schemas/user-v2.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersV2Service {
  constructor(@InjectModel('Userv2') private userModel: Model<UserV2>) {}

  async create(createUserDto: CreateUserDto): Promise<UserV2> {
    const createdUser = new this.userModel({_id: new Types.ObjectId(), ...createUserDto});
    return createdUser.save();
  }

  async findAll(): Promise<UserV2[]> {
    return this.userModel.find().exec();
  }

  async findById(id: string): Promise<UserV2> {
    return this.userModel.findById(id).exec();
  }
}
