// jwt-auth.guard.ts
import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  /**
   * You can override methods here to add custom logic.
   * For example, checking for a @Public() decorator to skip auth.
   */
  override canActivate(context: ExecutionContext) {
    // Add custom logic here (optional)
    return super.canActivate(context);
  }
}