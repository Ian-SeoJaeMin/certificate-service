import { Injectable } from '@modules/@nestjs/common';
import { UserTokenModel } from '../model/user-token.model';
import { ConfigService } from '@modules/@nestjs/config';
import { JwtService } from '@modules/@nestjs/jwt';

@Injectable()
export class TokenProvider {
    constructor(
        private readonly configService: ConfigService,
        private readonly jwtService: JwtService
    ) {}

    issueToken(tokenInfo: UserTokenModel, expireDuration: number | string) {
        return '';
    }
}
