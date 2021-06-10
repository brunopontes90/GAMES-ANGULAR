import { JogosService } from './../../service/jogos.service';
import { Jogos } from './../../model/jogos';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css']
})
export class JogosComponent implements OnInit {

  constructor(private jogoService: JogosService) { }

  jogos: Jogos[] = [];
  editMod = false;

  formJogo?: FormGroup;

  ngOnInit(): void {
    this.listar();
  }

  // Criando um Grupo de formulario
  criarFormulario(jogo: Jogos): void {
    this.formJogo = new FormGroup({
      id: new FormControl(jogo.id, Validators.required),
      nomeJogo: new FormControl(jogo.nomeJogo, Validators.required),
      genero: new FormControl(jogo.genero, Validators.required),
      plataforma: new FormControl(jogo.plataforma, Validators.required),
      avaliacao: new FormControl(jogo.avaliacao, Validators.required),
      url: new FormControl(jogo.url)
    });
  }

  // Listar jogos cadastardos
  listar(): void {
    this.jogoService.list().subscribe(jogos => {
      // Mapaeando lista de jogo e retornado uma cópia alterada
      this.jogos = jogos;
    });
  }

  // Inserir um novo jogo
  novoJogo(): void {
    const jogo = new Jogos();
    this.editMod = false;

    this.criarFormulario(jogo);
  }

  // Cancelar input
  cancelar(): void {
    this.formJogo = undefined;
    this.listar();
  }

  // Salvar e atualizar os jogos

  salvar(): void {

    if (!this.editMod) {
      // Verificando validação
      if (this.formJogo?.valid) {
        // Tranforma os dados do form para objeto json
        this.jogoService.insert(this.formJogo?.getRawValue()).subscribe(jogo => {
          this.listar();
          this.formJogo = undefined;
        });
      }
    } else {
      // Verificando validação
      if (!this.formJogo?.valid) {
        return;
      }
      // Tranforma os dados do form para objeto json
      this.jogoService.update(this.formJogo?.getRawValue()).subscribe(jogo => {
        this.listar();
        this.formJogo = undefined;
      });

    }
  }


  // Permitir autualizar jogo
  atualizar(jogo: Jogos): void {
    this.criarFormulario(jogo);
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
