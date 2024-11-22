export interface ILogger {
  log(ctx: string, message: string): void;

  error(ctx: string, message: string): void;

  warn(ctx: string, message: string): void;

  debug(message: string): void;
}
