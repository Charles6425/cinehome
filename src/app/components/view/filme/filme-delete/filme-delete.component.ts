import { FilmeService } from './../filme.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Filme } from '../filme.model';

@Component({
  selector: 'app-filme-delete',
  templateUrl: './filme-delete.component.html',
  styleUrls: ['./filme-delete.component.css']
})
export class FilmeDeleteComponent implements OnInit {

  filme: Filme ={
    id:'',
    imagem:'',
    titulo:'',
    descricao:'',
    duracao:''
  }

  constructor(private service: FilmeService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.filme.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void{
    this.service.findById(this.filme.id!).subscribe(resposta=>{
      this.filme=resposta
    })
  }

  delete():void{
    this.service.delete(this.filme.id!).subscribe(resposta=>{
      this.router.navigate(['filmes'])
      this.service.mensagem('Filme deletado com sucesso!')
    }, err=>{
      this.service.mensagem(err.error.error)
    })
  }

  cancel():void{
    this.router.navigate(['filmes'])
  }



}
