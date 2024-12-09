import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersV2Controller } from './users-v2.controller';
import { UsersV2Service } from './users-v2.service';
import { UserV2, UserV2Schema } from './schemas/user-v2.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Userv2', schema: UserV2Schema }]),
  ],
  controllers: [UsersV2Controller],
  providers: [UsersV2Service],
})
export class UsersV2Module {}
