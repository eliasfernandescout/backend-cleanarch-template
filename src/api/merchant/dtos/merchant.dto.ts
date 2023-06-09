import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class MerchantDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  // @IsNotEmpty()
  // logo: number;

  // @IsString()
  // @IsNotEmpty()
  // category: string;

  // @IsString()
  // @IsNotEmpty()
  // subcategory: string;

  // @IsString()
  // @IsNotEmpty()
  // description: string;

  // @IsBoolean()
  // @IsNotEmpty()
  // isAvailable: string;

  // @IsBoolean()
  // @IsNotEmpty()
  // availabilityPeriod: string[];
}
