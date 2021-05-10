import { environment } from './../../../../environments/environment';
import { Sala } from './sala.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalaService {

  baseUrl: String= environment.baseURL;
  constructor(private http: HttpClient) { }

  findAll(): Observable<Sala[]>{
    const url= `${this.baseUrl}/sala`
    return this.http.get<Sala[]>(url)

  }

}
