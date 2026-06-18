import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello NestJs';
  }

  getName(): string {
    return 'Kornphop Panchaiyaphum';
  }

  getLove(): string {
    return 'I love Nig';
  }

  getJson(): object {
    return {
      name: 'Kornphop',
      surname: 'Panchaiyaphum',
      age: 16,
      version : process.env.API_VERSION,
    };
  }
}
