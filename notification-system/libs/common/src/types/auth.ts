export type Oauth2Config = {
  cache: boolean;
  rateLimit: boolean;
  jwksRequestsPerMinute: number;
  jwksUri: string;
  audience: string;
  issuer: string;
  algorithms: string[];
};
