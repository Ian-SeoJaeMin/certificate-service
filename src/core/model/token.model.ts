import { TokenType } from '../code/token-type';

export class TokenModel {
    userId: number;
    refreshHash: string;
    tokenType: TokenType;
    tokenName: string;
    exp: number;
}
