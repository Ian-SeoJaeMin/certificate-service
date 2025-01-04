import { TokenResponseDto } from '@src/certificate/dto/token-response.dto';
import { UserType } from '@src/core/code/user-type';

export interface TokenGenerator<T, R extends TokenResponseDto> {
    issueRefreshToken(t: T): R;
    getUserTypeName(): UserType;
}