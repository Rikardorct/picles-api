import { IsEmail, IsNotEmpty, IsNumberString, IsString, Length, isEmail, isNumberString, isString } from "class-validator"

export default class UpdateShelterControllerInput {
@IsNotEmpty()    
@IsString()
name: string
@IsNotEmpty()
@IsString()
@Length(10,11)
whatsapp: string
@IsNotEmpty()
@IsString()
@IsNumberString()
phone: string
@IsNotEmpty()
@IsString()
@IsEmail()
email: string
}