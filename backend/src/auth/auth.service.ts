import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

type UserRecord = {
  id: number;
  email: string;
  name: string;
  password: string;
};

@Injectable()
export class AuthService {
  private readonly users: UserRecord[] = [
    {
      id: 1,
      email: 'ayyaz.dev@email.com',
      name: 'Muhammad Ayyaz',
      password: 'Password123!',
    },
  ];

  constructor(private readonly jwtService: JwtService) {}

  validateUser(email: string, password: string) {
    const user = this.users.find((item) => item.email === email && item.password === password);

    if (!user) {
      return null;
    }

    const { password: _password, ...safeUser } = user;
    return safeUser;
  }

  login(user: { id: number; email: string; name: string }) {
    return {
      access_token: this.jwtService.sign({ sub: user.id, email: user.email, name: user.name }),
      user,
    };
  }

  register() {
    return {
      message: 'Registration endpoint is ready for integration.',
    };
  }
}