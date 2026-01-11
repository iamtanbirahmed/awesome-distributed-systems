import { Injectable } from '@nestjs/common';
import { MailgunService } from '@notification-system/mailgun';

@Injectable()
export class AppService {

  constructor(private readonly mailgunService: MailgunService) {}
  getData(): { message: string } {
    return ({ message: 'Hello API' + this.mailgunService.sendEmail('test', 'test', 'test') ? ' with MailgunService' : '' });
  }
}
