import { Component, OnInit } from '@angular/core';
import { JogosService } from 'src/app/service/jogos.service';
import { Jogos } from 'src/app/model/jogos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jogos = new Array<Jogos>();
  selectJogo?: Jogos;
  insertUser = '';
  user = localStorage.getItem('user');
  editMod = false;
  constructor(private jogosService: JogosService) { }

  ngOnInit(): void {
    this.list();
  }

  list(): void {
    this.jogosService.list().subscribe(jogos => {
      this.jogos = jogos;
    });
  }

  addUser(): void {
    this.editMod = true;
  }

  save(): void {
    localStorage.setItem('user', this.insertUser);
  }
}
