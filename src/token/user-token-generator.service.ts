import { Injectable } from '@modules/@nestjs/common';
import { TokenGenerator } from './interface/token-generator.interface';
import { UserTokenModel } from '@src/core/model/user-token.model';
import { TokenResponseDto } from '@src/certificate/dto/token-response.dto';
import { UserType } from '@src/core/code/user-type';
import { TokenProvider } from '@src/core/util/token-provider';
import { jwtConfig } from '@src/core/config/jwt.config';
import { TokenType } from '@src/core/code/token-type';

@Injectable()
export class UserTokenGeneratorService implements TokenGenerator<UserTokenModel, Promise<TokenResponseDto>> {
    constructor(private readonly tokenProvidor: TokenProvider) {}

    async issueToken(userTokenModel: UserTokenModel): Promise<TokenResponseDto> {
        return {
            accessToken: await this.tokenProvidor.issueToken(TokenType.ACCESS_TOKEN, userTokenModel, jwtConfig.user.accessTokenExpiresIn),
            refreshToken: await this.tokenProvidor.issueToken(TokenType.REFRESH_TOKEN, userTokenModel, jwtConfig.user.refreshTokenExpireIn)
        };
    }

    getUserTypeName(): UserType {
        return UserType.USER;
    }
}
