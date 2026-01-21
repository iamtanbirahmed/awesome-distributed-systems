import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Oauth2Config } from '@notification-system/common';
import { AuthModule } from '@notification-system/auth';
import { MailgunModule } from '@notification-system/mailgun';
import { environment } from '../environments/environment';

@Module({
  imports: [
    MailgunModule,
    AuthModule.forRoot({
      ...environment.oauth2Config,
    } as Oauth2Config),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
