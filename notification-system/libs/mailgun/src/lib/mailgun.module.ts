import { Module } from '@nestjs/common';
import { MailgunService } from './mailgun.service';

@Module({
  controllers: [],
  providers: [MailgunService],
  exports: [MailgunService],
})
export class NotificationSystemMailgunModule {}
