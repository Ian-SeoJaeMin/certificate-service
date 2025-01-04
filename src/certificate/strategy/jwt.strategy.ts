import { Injectable } from '@modules/@nestjs/common';
import { ConfigService } from '@modules/@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly configService: ConfigService) {
        super({
            // Bearer $token
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get<string>('ACCESS_TOKENT_SECRET')
        });
    }

    validate(payload: any) {
        return payload;
    }
}