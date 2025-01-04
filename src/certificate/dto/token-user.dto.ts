import { IsEnum, IsInt, IsNotEmpty } from '@modules/class-validator/types';
import { UserType } from '@src/common/code/user-type';

export class TokenUserDto {
    @IsInt()
    @IsNotEmpty()
    userId: number;

    @IsEnum(UserType)
    @IsNotEmpty()
    userType: UserType;
}
