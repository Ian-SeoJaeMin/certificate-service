import { IsEnum, IsInt, IsNotEmpty } from 'class-validator';
import { UserType } from '@src/core/code/user-type';

export class UserInfoDto {
    @IsInt()
    @IsNotEmpty()
    userId: number;

    @IsEnum(UserType)
    @IsNotEmpty()
    userType: UserType;
}
