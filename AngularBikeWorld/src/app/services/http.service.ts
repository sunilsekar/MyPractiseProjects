import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl: string = "http://localhost:8888";

  constructor(private http: HttpClient) { }

  postLogin(json: string) {
    return this.http.post<Response>(this.baseUrl + "/login", json);
  }
}
