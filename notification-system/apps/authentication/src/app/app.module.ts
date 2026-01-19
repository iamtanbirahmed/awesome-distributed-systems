import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailgunModule } from '@notification-system/mailgun';
import { AuthModule } from '@notification-system/auth';
import { environment } from '../environments/environment';
import { Oauth2Config } from '@notification-system/common';
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
