import { Body, Controller, ParseIntPipe, Post } from '@nestjs/common';
import { CertificateService } from './certificate.service';

@Controller('certificate')
export class CertificateController {
    constructor(private readonly certificateService: CertificateService) {}

    @Post('token')
    issueToken(@Body('userId', ParseIntPipe) userId: number) {
        return this.certificateService.issueToken(userId);
    }
}
