import { IsNotEmpty, IsString, Length } from "class-validator"

export class CreateAuthorDTO {
  @Length(3, 100)
  @IsNotEmpty()
  @IsString()
  name: string
  
  @Length(1, 3)
  @IsNotEmpty()
  @IsString()
  country: string 
}