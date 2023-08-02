import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Nome é obrigatório.' })
  @IsString()
  readonly name: string;

  @IsNotEmpty({ message: 'Username é obrigatório.' })
  username: string;

  @IsNotEmpty({ message: 'Email é obrigatório.' })
  email: string;

  @IsNotEmpty({ message: 'Senha é obrigatória.' })
  password: string;

  url?: string;
}
