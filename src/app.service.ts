import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello from ECS, how are you ? , hope you are fine';
  }
}
