import { Injectable } from '@modules/@nestjs/common';
import { UserTokenModel } from '../model/user-token.model';
import { ConfigService } from '@modules/@nestjs/config';
import { JwtService } from '@modules/@nestjs/jwt';
import { TokenType } from '../code/token-type';

@Injectable()
export class TokenProvider {
    constructor(
        private readonly configService: ConfigService,
        private readonly jwtService: JwtService
    ) {}

    issueToken(tokenType: TokenType, tokenInfo: UserTokenModel, expiresIn: number) {
        const currentTimeInSeconds = Math.floor(Date.now() / 1000);
        tokenInfo = {
            ...tokenInfo,
            tokenType,
            tokenName: tokenType === TokenType.ACCESS_TOKEN ? 'access' : 'refresh',
            exp: currentTimeInSeconds + expiresIn
        };
        return this.jwtService.signAsync(
            {
                ...tokenInfo
            },
            {
                secret: this.configService.get<string>('TOKEN_SECRET')
                // expiresIn
            }
        );
    }
}
