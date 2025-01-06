import { ConfigModule } from '@modules/@nestjs/config';
import { Module } from '@nestjs/common';
import { CertificateModule } from './certificate/certificate.module';
import { TokenModule } from './token/token.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true
        }),
        CertificateModule,
        TokenModule
    ],
    controllers: [],
    providers: []
})
export class AppModule {}
