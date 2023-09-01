import {
  IsEnum,
  IsHexColor,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { BanckAccountType } from 'src/modules/bank-accounts/entities/BankAccount';

export class CreateBankAccountDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  initialBalance: number;

  @IsNotEmpty()
  @IsEnum(BanckAccountType)
  type: BanckAccountType;

  @IsHexColor()
  @IsNotEmpty()
  @IsString()
  color: string;
}
