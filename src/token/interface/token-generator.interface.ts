import { TokenResponseDto } from '@src/certificate/dto/token-response.dto';
import { UserType } from '@src/core/code/user-type';

export interface TokenGenerator<T, R extends Promise<TokenResponseDto>> {
    issueToken(t: T): R;
    getUserTypeName(): UserType;
}
