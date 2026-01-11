import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationSystemMailgunModule } from '@notification-system/mailgun';

@Module({
  imports: [NotificationSystemMailgunModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
