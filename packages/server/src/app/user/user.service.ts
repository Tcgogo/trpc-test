import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getHello(name: string, age: number) {
    return { name, age };
  }

  createUser(name: string, age: number) {
    return `createUser success: ${name} ${age}`;
  }
}
