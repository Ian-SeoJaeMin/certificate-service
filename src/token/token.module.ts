import { Module } from '@modules/@nestjs/common';
import { TokenService } from './token.service';
import { UserTokenGeneratorService } from './user-token-generator.service';
import { TokenProvider } from '@src/core/util/token-provider';
import { JwtModule } from '@modules/@nestjs/jwt';

@Module({
    imports: [JwtModule.register({})],
    controllers: [],
    providers: [
        TokenProvider,
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
