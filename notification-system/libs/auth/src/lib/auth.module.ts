import { DynamicModule, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({})
export class AuthModule {
  static forRoot(
    oauth2Config: {
      jwksUri: string;
      audience: string;
      issuer: string;
      algorithms: string[];
      cache: boolean;
      rateLimit: boolean;
      jwksRequestsPerMinute: number;
    }
  ) : DynamicModule {
    return {
      module: AuthModule,
      imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
      providers: [
        {
          provide: 'OAUTH2_CONFIG',
          useValue: oauth2Config,
        },
        JwtStrategy],
      exports: [PassportModule],
    };
  }
}
