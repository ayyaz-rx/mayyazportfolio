import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() request: { user: { id: number; email: string; name: string } }) {
    return this.authService.login(request.user);
  }

  @Post('register')
  register() {
    return this.authService.register();
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  profile(@Request() request: { user: { sub: number; email: string; name: string } }) {
    return request.user;
  }
}