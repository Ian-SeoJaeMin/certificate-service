import { Injectable, InternalServerErrorException } from '@modules/@nestjs/common';
import { TokenGenerator } from './interface/token-generator.interface';
import { TokenModel } from '@src/core/model/token.model';
import { TokenResponseDto } from '@src/certificate/dto/token-response.dto';
import { Inject } from '@nestjs/common';
import { UserType } from '@src/core/code/user-type';

@Injectable()
export class TokenService<T extends TokenModel, R extends Promise<TokenResponseDto>> {
    private tokenGenerator: TokenGenerator<T, R>[];

    constructor(@Inject('TOKEN_GENERATORS') tokenGenerators: TokenGenerator<T, R>[]) {
        this.tokenGenerator = tokenGenerators;
    }

    issueToken(t: T, userType: UserType) {
        const tokenGenerator = this.findTokenGeneratorByTokenName(userType);

        return tokenGenerator.issueToken(t);
    }

    private findTokenGeneratorByTokenName(userType: UserType) {
        const tokenGenerator = this.tokenGenerator.find(x => x.getUserTypeName() === userType);
        if (!tokenGenerator) {
            throw new InternalServerErrorException(`Token generator for user type ${userType} not found`);
        }
        return tokenGenerator;
    }
}
