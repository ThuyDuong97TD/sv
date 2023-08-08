import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Chat } from './schema/chat.schema';

@Injectable()
export class ChatService {
  constructor(@InjectModel(Chat.name) private chatModel: Model<Chat>) {}

  create(createChatDto: CreateChatDto) {
    const today = new Date();
    createChatDto.createAt = today.toISOString();

    const result = this.chatModel.create(createChatDto);

    return result;
  }

  findAll() {
    const result = this.chatModel.find().exec();
    return result;
  }

  findOne(id: string) {
    const result = this.chatModel.findById(id).exec();
    return result;
  }

  async update(id: string, updateChatDto: UpdateChatDto) {
    const document = await this.chatModel.findById(id).exec();
    document.content = updateChatDto.content;
    const result = document.save();
    return result;
  }

  remove(id: number) {
    return `This action removes a #${id} chat`;
  }
}
