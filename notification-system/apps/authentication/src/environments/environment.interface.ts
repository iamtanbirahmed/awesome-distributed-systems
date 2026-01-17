import { Algorithm } from "jsonwebtoken";
export interface AppEnvironment {
  oauth2Config: {
    cache: boolean;
    rateLimit: boolean;
    jwksRequestsPerMinute: number;
    jwksUri: string;
    audience: string;
    issuer: string;
    algorithms: Algorithm[];
  };
}
