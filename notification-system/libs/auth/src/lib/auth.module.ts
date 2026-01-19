import { DynamicModule, Module } from '@nestjs/common';
import { Oauth2Config } from '@notification-system/common';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
@Module({})
export class AuthModule {
  static forRoot(oauth2Config: Oauth2Config): DynamicModule {
    return {
      module: AuthModule,
      imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
      providers: [
        {
          provide: 'OAUTH2_CONFIG',
          useValue: oauth2Config,
        },
        JwtStrategy,
      ],
      exports: [PassportModule],
    };
  }
}
