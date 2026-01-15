import { AppEnvironment } from "./environment.interface";

export const environment: AppEnvironment = {
  oauth2Config: {
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `http://${process.env.OAUTH2_HOST}/realms/notification/protocol/openid-connect/certs`,
    audience: 'account',
    issuer: `http://${process.env.OAUTH2_HOST}/realms/notification`,
    algorithms: [],
  },
};