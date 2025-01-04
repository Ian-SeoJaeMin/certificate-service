import { Injectable } from '@modules/@nestjs/common';
import { TokenGenerator } from './interface/token-generator.interface';
import { UserTokenModel } from '@src/core/model/user-token.model';
import { TokenResponseDto } from '@src/certificate/dto/token-response.dto';
import { UserType } from '@src/core/code/user-type';
import { TokenProvider } from '@src/core/util/token-provider';
import { jwtConfig } from '@src/core/config/jwt.config';

@Injectable()
export class UserTokenGeneratorService implements TokenGenerator<UserTokenModel, TokenResponseDto> {
    constructor(private readonly tokenProvidor: TokenProvider) {}

    issueRefreshToken(userTokenModel: UserTokenModel): TokenResponseDto {
        return {
            accessToken: this.tokenProvidor.issueToken(userTokenModel, jwtConfig.user.accessTokenExpiresIn),
            refreshToken: this.tokenProvidor.issueToken(userTokenModel, jwtConfig.user.refreshTokenExpireIn)
        };
    }

    getUserTypeName(): UserType {
        return UserType.USER;
    }
}
