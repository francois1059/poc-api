import { IsNumber } from 'class-validator';

export class Environment {
  @IsNumber()
  public readonly PORT: number = 3010;
}
