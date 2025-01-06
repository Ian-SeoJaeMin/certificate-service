import { Injectable } from '@nestjs/common';
import { UserInfoDto } from './dto/token-user.dto';
import { TokenService } from '@src/token/token.service';
import { UserTokenModel } from '@src/core/model/user-token.model';
import { TokenResponseDto } from './dto/token-response.dto';
import { UserType } from '@src/core/code/user-type';

@Injectable()
export class CertificateService {
    constructor(private readonly userTokenService: TokenService<UserTokenModel, TokenResponseDto>) {}

    issueToken(userInfo: UserInfoDto) {
        const { userType } = userInfo;
        switch (userType) {
            case UserType.USER:
                const userTokenModel = new UserTokenModel();
                userTokenModel.userId = userInfo.userId;
                return this.userTokenService.issueToken(userTokenModel, userType);
        }
    }
}
