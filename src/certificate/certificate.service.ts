import { Injectable } from '@nestjs/common';
import { TokenUserDto } from './dto/token-user.dto';

@Injectable()
export class CertificateService {
    constructor() {}

    issueToken(tokenUserDto: TokenUserDto) {
        const { userType } = tokenUserDto;
    }
}
