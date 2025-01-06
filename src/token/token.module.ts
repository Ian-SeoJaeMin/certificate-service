import { Module } from '@modules/@nestjs/common';
import { TokenService } from './token.service';
import { UserTokenGeneratorService } from './user-token-generator.service';

@Module({
    imports: [],
    controllers: [],
    providers: [
        TokenService,
        UserTokenGeneratorService,
        {
            provide: 'TOKEN_GENERATORS',
            useFactory: (userTokenGenerator: UserTokenGeneratorService) => {
                return [userTokenGenerator];
            },
            inject: [UserTokenGeneratorService]
        }
    ],
    exports: [TokenService]
})
export class TokenModule {}
