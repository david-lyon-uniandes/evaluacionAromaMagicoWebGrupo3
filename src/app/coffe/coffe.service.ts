import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Coffe } from './coffe';

@Injectable({
  providedIn: 'root'
})
export class CoffeService {

  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getCoffes(): Observable<Coffe[]> {
    return this.http.get<Coffe[]>(this.apiUrl);
  }

}
