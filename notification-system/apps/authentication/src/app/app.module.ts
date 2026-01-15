import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationSystemMailgunModule } from '@notification-system/mailgun';
import { AuthModule } from './auth.module';

@Module({
  imports: [NotificationSystemMailgunModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
