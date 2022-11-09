import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty,  IsNumber, IsString } from "class-validator";



export class CreateUserDto {
    
	@ApiProperty()
	@IsNotEmpty()
	@IsEmail()
	email: string;

	@ApiProperty()
	@IsNotEmpty()
	@IsString()
	name: string;

	@ApiProperty()
	@IsNotEmpty()
	@IsString()
	mobileNum: string;


	@ApiProperty()
	@IsNotEmpty()
	@IsString()
	password: string;


	@ApiProperty()
	@IsNotEmpty()
	@IsString()
	username: string;


}