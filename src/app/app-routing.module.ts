import { JogosComponent } from './views/jogos/jogos.component';
import { ConsolesComponent } from './views/consoles/consoles.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'consoles', component: ConsolesComponent},
  {path: 'jogos', component: JogosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
