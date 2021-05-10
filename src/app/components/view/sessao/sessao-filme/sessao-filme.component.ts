import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Filme } from '../../filme/filme.model';
import { FilmeService } from '../../filme/filme.service';

@Component({
  selector: 'app-sessao-filme',
  templateUrl: './sessao-filme.component.html',
  styleUrls: ['./sessao-filme.component.css']
})
export class SessaoFilmeComponent implements OnInit {

  filme: Filme[]=[]
  displayedColumns: string[] = ['id', 'titulo', 'descricao', 'duracao','imagem','acoes'];

  constructor(private service:FilmeService, private router:Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(resposta =>{
      this.filme=resposta;
    })
  }
 
  navegarFilmeCreate(){
    this.router.navigate(["filmes/create"])
  }

}
