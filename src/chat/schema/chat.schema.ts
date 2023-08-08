import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId } from 'mongoose';

export type ChatDocument = HydratedDocument<Chat>;

@Schema()
export class Chat {
  @Prop({ type: 'ObjectId' })
  id: ObjectId;

  @Prop({ type: String })
  content: string;

  @Prop({ type: String })
  sender: number;

  @Prop({ type: String })
  receiver: string;

  @Prop({ type: String })
  createAt: Date;
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
