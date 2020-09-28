import { Injectable } from "@angular/core";
import { TokenService } from "../token/token.service";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private tokenService: TokenService) { }

    public getToken(): string {
        return this.tokenService.getToken();
    }

    public setToken(token: string): void {
        this.tokenService.setToken(token);
    }

    public logout(): void {
        this.tokenService.removeToken();
    }

    public isLogged(): boolean {
        return this.tokenService.hasToken();
    }
}