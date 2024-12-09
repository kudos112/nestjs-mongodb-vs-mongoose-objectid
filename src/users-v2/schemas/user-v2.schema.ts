import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types, Schema as mongooseSchema } from 'mongoose';

export type UserV2Document = HydratedDocument<UserV2>;

@Schema()
export class UserV2 {
  @Prop({ type: Types.ObjectId })
  _id: Types.ObjectId;

  @Prop()
  name: string;
}

export const UserV2Schema = SchemaFactory.createForClass(UserV2);
