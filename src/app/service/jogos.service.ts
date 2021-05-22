import { JogosService } from 'src/app/service/jogos.service';
import { Jogos } from 'src/app/model/jogos';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JogosService{

  private jogos = new Array<Jogos>();
  private autoId = 0;

  constructor(private jogoService: JogosService) { }
  ngOnInit(): void {}

  // INSERE NOVO JOGO
  insert(jogo: Jogos): void{
    jogo.id = this.autoId;
    this.jogos.push(jogo);
    this.autoId++;
  }

  // LISTA TODOS OS JOGOS
  list(): Array<Jogos>{
    return this.jogos;
  }

  // REMOVE JOGO
  remove( id: number): void{
    for (let i = 0; i < this.jogos.length; i++){
      const jogo = this.jogos[i];
      if (jogo.id === id){
        this.jogos.splice(i, 1);
        break;
      }
    }
  }

  // ATUALIZA UM JOGO
  update(jogo: Jogos): void{
    for (let i = 0; i < this.jogos.length; i++){
      const j = this.jogos[i];
      if(j.id === jogo.id){
        this.jogos[i] = jogo;
        break;
      }
    }
  }

  // ATUALZIA A PAGINA DE JOGOS
  refreshJogos(): void{
    this.jogos = this.jogoService.list();
  }
}
