import { IsEnum, IsInt, IsNotEmpty } from '@modules/class-validator/types';
import { UserType } from '@src/core/code/user-type';

export class TokenUserDto {
    @IsInt()
    @IsNotEmpty()
    userId: number;

    @IsEnum(UserType)
    @IsNotEmpty()
    userType: UserType;
}
