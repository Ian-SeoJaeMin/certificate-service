import { Body, Controller, Post } from '@nestjs/common';
import { CertificateService } from './certificate.service';
import { UserInfoDto } from './dto/token-user.dto';
import { userInfo } from 'os';

@Controller('certificate')
export class CertificateController {
    constructor(private readonly certificateService: CertificateService) {}

    @Post('token')
    issueToken(@Body() userInfo: UserInfoDto) {
        return this.certificateService.issueToken(userInfo);
    }
}
