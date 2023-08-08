import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { query } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/sum')
  getSum(@Query('a') a: string, @Query('b') b: string) {
    const tempA = parseInt(a);
    const tempB = parseInt(b);

    return this.appService.getSum(tempA, tempB);
  }
  @Get('/minus/:a/:b')
  getMinus(@Param('a') a: string, @Param('b') b: string) {
    const tempA = parseInt(a);
    const tempB = parseInt(b);

    return this.appService.getMinus(tempA, tempB);
  }
  @Get('/multiply/:a/:b')
  getMultiply(@Param('a') a: string, @Param('b') b: string) {
    const tempA = parseInt(a);
    const tempB = parseInt(b);

    return this.appService.getMultiply(tempA, tempB);
  }
  @Get('/divide/:a/:b')
  getDivide(@Param('a') a: string, @Param('b') b: string) {
    const tempA = parseInt(a);
    const tempB = parseInt(b);

    return this.appService.getDivide(tempA, tempB);
  }
  @Get('/p/:a/:b/:o')
  getP(@Param('a') a: string, @Param('b') b: string, @Param('o') o: string) {
    const tempA = parseInt(a);
    const tempB = parseInt(b);

    return this.appService.getP(tempA, tempB, o);
  }
}
