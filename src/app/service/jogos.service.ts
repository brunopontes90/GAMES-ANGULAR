import { Jogos } from 'src/app/model/jogos';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JogosService {

  address = `${environment.url}games`;

  constructor(private http: HttpClient) { }

  // INSERE NOVO JOGO
  insert(jogo?: Jogos): Observable<Jogos> {
    if (!jogo) {
      return EMPTY;
    }
    return this.http.post<Jogos>(this.address, jogo);
  }

  // LISTA TODOS OS JOGOS
  list(): Observable<Jogos[]> {
    return this.http.get<Jogos[]>(this.address);
  }

  // REMOVE JOGO
  remove(id: number): Observable<any> {
    if (id <= 0) { return EMPTY; }
    return this.http.delete<any>(`${this.address}/${id}`);
  }

  // ATUALIZA UM JOGO
  update(jogo?: Jogos): Observable<Jogos> {
    if (!jogo) {
      return EMPTY;
    }
    return this.http.put<Jogos>(`${this.address}/${jogo.id}`, jogo);
  }

}
