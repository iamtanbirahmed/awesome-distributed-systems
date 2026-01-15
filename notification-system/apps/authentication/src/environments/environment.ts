import { AppEnvironment } from './environment.interface';

export const environment: AppEnvironment = {
  oauth2Config: {
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `http://localhost:8080/realms/notification/protocol/openid-connect/certs`,
    audience: 'account',
    issuer: `http://localhost:8080/realms/notification`,
    algorithms: ['RS256'],
  },
};
