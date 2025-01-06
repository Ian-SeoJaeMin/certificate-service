import { Module } from '@nestjs/common';
import { CertificateService } from './certificate.service';
import { CertificateController } from './certificate.controller';
import { TokenModule } from '@src/token/token.module';

@Module({
    imports: [TokenModule],
    controllers: [CertificateController],
    providers: [CertificateService]
})
export class CertificateModule {}
