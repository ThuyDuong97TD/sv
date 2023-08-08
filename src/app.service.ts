import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getSum(a: number, b: number) {
    return a + b;
  }
  getMinus(a: number, b: number) {
    return a - b;
  }
  getMultiply(a: number, b: number) {
    return a * b;
  }
  getDivide(a: number, b: number) {
    return a / b;
  }
  getP(a: number, b: number, o: string) {
    let result = 0;
    switch (o) {
      case 'sum': {
        result = a + b;
        break;
      }
      case 'minus': {
        result = a - b;
        break;
      }
      case 'multiply': {
        result = a * b;
        break;
      }
      case 'divide': {
        result = a / b;
        break;
      }
    }
    return result;
  }
}
