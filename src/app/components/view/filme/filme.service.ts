import { Filme } from './filme.model';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  baseUrl: String = environment.baseURL
  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll(): Observable<Filme[]> {
    const url = `${this.baseUrl}/filme`
    return this.http.get<Filme[]>(url)

  }

  findById(id: String): Observable<Filme> {
    const url = `${this.baseUrl}/filme/${id}`
    return this.http.get<Filme>(url)
  }

  create(filme: Filme): Observable<Filme> {
    const url = `${this.baseUrl}/filme`
    return this.http.post<Filme>(url, filme);
  }
  
  delete(id: String): Observable<void> {
    const url = `${this.baseUrl}/filme/${id}`
    return this.http.delete<void>(url)
  }

  update(filme: Filme): Observable<void>{
    const url = `${this.baseUrl}/filme/${filme.id}`
    return this.http.put<void>(url, filme)
  
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }


}
