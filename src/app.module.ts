import { ConfigModule } from '@modules/@nestjs/config';
import { Module } from '@nestjs/common';
import { CertificateModule } from './certificate/certificate.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true
        }),
        CertificateModule
    ],
    controllers: [],
    providers: []
})
export class AppModule {}
