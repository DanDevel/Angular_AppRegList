import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://localhost:7121/api/RegisterData';

  constructor(private http: HttpClient) {}

  get(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getById(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get(url);
  }

  post(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }
}

