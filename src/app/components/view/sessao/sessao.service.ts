import { environment } from './../../../../environments/environment';
import { Sessao } from './sessao.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SessaoService {

  baseUrl: String = environment.baseURL;
  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findById(id: String):Observable<Sessao>{
    const url = `${this.baseUrl}/sessao/${id}`
    return this.http.get<Sessao>(url)

  }

  findByAllSalas(id_sala: String): Observable<Sessao[]> {
    const url = `${this.baseUrl}/sessao?sala=${id_sala}`
    return this.http.get<Sessao[]>(url)
  }

  create(sessao: Sessao, id_sala: String, id_filme: String): Observable<Sessao> {
    const url = `${this.baseUrl}/sessao?sala=${id_sala}&filme=${id_filme}`
    return this.http.post<Sessao>(url, sessao)


  }
  mensagem(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })

  }

  findAll(): Observable<Sessao[]> {
    const url = `${this.baseUrl}/sessao/all`
    return this.http.get<Sessao[]>(url)
  }

  delete(id: String):Observable<void>{
    const url = `${this.baseUrl}/sessao/${id}`
    return this.http.delete<void>(url)

  }

  update(sessao: Sessao):Observable<void>{
    const url = `${this.baseUrl}/sessao/${sessao.id}`
    return this.http.put<void>(url, sessao)
  }

}