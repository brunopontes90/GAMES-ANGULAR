export class Jogos{
  id?: number;
  nomeJogo: string;
  genero: string;
  plataforma: string;

  constructor(nomeJogo: string, genero: string, plataforma: string){
    this.nomeJogo = nomeJogo;
    this.genero = genero;
    this.plataforma = plataforma;
  }
}
