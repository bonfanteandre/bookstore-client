import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class EndpointService {

    public getApiEndpoint(): string {
        return environment.apiUrl;
    }

}