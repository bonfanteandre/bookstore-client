import { Injectable } from "@angular/core";

const KEY = 'acessToken';

@Injectable({
    providedIn: 'root'
})
export class TokenService {

    public hasToken(): boolean {
        return !!this.getToken();
    }

    public setToken(token: string): void {
        window.localStorage.setItem(KEY, token);
    }

    public getToken(): string {
        return window.localStorage.getItem(KEY);
    }

    public removeToken() {
        window.localStorage.removeItem(KEY);
    }

} 