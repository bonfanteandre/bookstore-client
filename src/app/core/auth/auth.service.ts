import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { EndpointService } from '../services/endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private endpointService: EndpointService) { }

  public authenticate(userId: string, password: string) {
    const credentials = {
        userId: userId,
        password: password
    };
    return this.http.post(`${this.endpointService.getApiEndpoint()}/login`, credentials);
  }
}
