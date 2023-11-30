// src/app/data.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

 // private apiUrl = 'https://jsonplaceholder.typicode.com/error-url';
 private apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

  constructor(private http: HttpClient) {}

  fetchData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
