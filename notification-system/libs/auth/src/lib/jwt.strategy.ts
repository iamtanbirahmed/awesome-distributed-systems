import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { passportJwtSecret } from 'jwks-rsa';
import { ExtractJwt, Strategy } from 'passport-jwt';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject('OAUTH2_CONFIG') private readonly oauth2Config: any) {
    console.log('JWT Strategy initialized with environment:', oauth2Config);
    super({
      secretOrKeyProvider: passportJwtSecret({
        cache: oauth2Config.cache,
        rateLimit: oauth2Config.rateLimit,
        jwksRequestsPerMinute: oauth2Config.jwksRequestsPerMinute,
        jwksUri: oauth2Config.jwksUri,
      }),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      audience: oauth2Config.audience,
      issuer: oauth2Config.issuer,
      algorithms: oauth2Config.algorithms,
    });
  }
  override validate(payload: any) {
    return {
      userId: payload.sub,
      email: payload.email,
    };
  }
}
