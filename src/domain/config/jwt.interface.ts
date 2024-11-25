export interface IJwtConfig {
  getJwtSecret(): string;
  getJwtRefreshSecret(): string;
  getJwtExpirationTime(): string;
  getJwtRefreshExpirationTime(): string;
}
