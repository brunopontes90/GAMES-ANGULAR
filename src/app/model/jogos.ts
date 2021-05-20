export class Jogos{
  id?: number;
  nomeJogo: string;
  genero = '';
  platafora = '';

  constructor(nomeJogo: string){
    this.nomeJogo = nomeJogo;
  }
}
