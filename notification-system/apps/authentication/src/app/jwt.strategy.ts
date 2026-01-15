import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { passportJwtSecret } from 'jwks-rsa';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { environment } from '../environments/environment';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      // 1. Fetch public keys dynamically from the provider
      secretOrKeyProvider: passportJwtSecret({
        cache: environment.oauth2Config.cache,
        rateLimit: environment.oauth2Config.rateLimit,
        jwksRequestsPerMinute: environment.oauth2Config.jwksRequestsPerMinute,
        jwksUri: environment.oauth2Config.jwksUri,
      }),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      audience: environment.oauth2Config.audience,
      issuer: environment.oauth2Config.issuer,
      algorithms: environment.oauth2Config.algorithms,
    });
  }
  override validate(payload: any) {
    console.log('JWT Payload:', payload);
    return {
      userId: payload.sub,
      email: payload.email,
    };
  }
}
