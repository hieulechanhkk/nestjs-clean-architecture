import { ILogger } from '../logger/logger.interface';
import { IJwtConfig } from '../config/jwt.interface';
import { IBcryptService } from '../adapter/bcrypt.interface';
import { IException } from '../exceptions/exceptions.interface';
import { IUserRepository } from '../repositories/userRepositoty.interface';
import { IJwtService, IJwtServicePayload } from '../adapter/jwt.interface';

export class LoginUseCases {
  constructor(
    private readonly logger: ILogger,
    private readonly jwtConfig: IJwtConfig,
    private readonly jwtService: IJwtService,
    private readonly exceptions: IException,
    private readonly userService: IUserRepository,
    private readonly bcryptService: IBcryptService,
  ) {}

  async login({ email, password }: { email: string; password: string }) {
    this.logger.log(
      'LoginUseCases.login execute',
      `The user ${email} is trying to login`,
    );

    const user = await this.userService.getUserByEmail(email);

    if (!user) {
      this.exceptions.notFoundException({ message: 'User not found' });
    }

    const isPasswordValid = await this.bcryptService.compare(
      password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new this.exceptions.UnauthorizedException({
        message: 'Invalid password',
      });
    }
    const payload: IJwtServicePayload = { username: user.username };
    const secret = this.jwtConfig.getJwtSecret();
    const expiredIn = this.jwtConfig.getJwtExpirationTime() + 's';
    return this.jwtService.createToken(payload, secret, expiredIn);
  }
}
