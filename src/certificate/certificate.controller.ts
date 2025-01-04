import { Body, Controller, ParseIntPipe, Post } from '@nestjs/common';
import { CertificateService } from './certificate.service';
import { TokenUserDto } from './dto/token-user.dto';

@Controller('certificate')
export class CertificateController {
    constructor(private readonly certificateService: CertificateService) {}

    @Post('token')
    issueToken(@Body() tokenUserDto: TokenUserDto) {
        return this.certificateService.issueToken(tokenUserDto);
    }
}
