import { JogosService } from './../../service/jogos.service';
import { Jogos } from './../../model/jogos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css']
})
export class JogosComponent implements OnInit {

  jogos = new Array<Jogos>();
  selectJogo?: Jogos = undefined;

  constructor(private jogoService: JogosService) { }

  ngOnInit(): void {
  }

}
