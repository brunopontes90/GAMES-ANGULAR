import { JogosService } from './../../service/jogos.service';
import { Jogos } from './../../model/jogos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css']
})
export class JogosComponent implements OnInit {

  jogos: Jogos[] = [];
  selectJogo?: Jogos;
  editMod = false;

  constructor(private jogoService: JogosService) { }

  ngOnInit(): void {
    this.listar();
  }

  // Listar jogos cadastardos
  listar(): void {
    this.jogoService.list().subscribe(jogos => {
      this.jogos = jogos;
    });
  }

  // Inserir um novo jogo
  novoJogo(): void {
    this.selectJogo = new Jogos();
    this.editMod = false;
  }

  // Cancelar input
  cancelar(): void {
    this.selectJogo = undefined;
    this.listar();
  }

  // Salvar e atualizar os jogos
  salvar(): void {
    if (!this.editMod) {
      this.jogoService.insert(this.selectJogo).subscribe(jogo => {
        this.listar();
        this.selectJogo = undefined;
      });
    } else {
      this.jogoService.update(this.selectJogo).subscribe(() => {
        this.listar();
        this.selectJogo = undefined;
      });
    }
  }

  // Permitir autualizar jogo
  atualizar(jogo: Jogos): void {
    this.selectJogo = jogo;
    this.editMod = true;
  }

  // Excluir jogos
  remove(id?: number): void {
    if (!id) { return; }
    this.jogoService.remove(id).subscribe(() => {
      this.listar();
    });
  }
}
