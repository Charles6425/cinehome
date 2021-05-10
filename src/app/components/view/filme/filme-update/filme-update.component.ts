import { ActivatedRoute, Router } from '@angular/router';
import { FilmeService } from './../filme.service';
import { Component, OnInit } from '@angular/core';
import { Filme } from '../filme.model';

@Component({
  selector: 'app-filme-update',
  templateUrl: './filme-update.component.html',
  styleUrls: ['./filme-update.component.css']
})
export class FilmeUpdateComponent implements OnInit {

  filme: Filme ={
    id:'',
    imagem:'',
    titulo:'',
    descricao:'',
    duracao:''
  }


  constructor(private service:FilmeService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.filme.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  cancel():void{
    this.router.navigate(['filmes'])
    
  }

  findById(): void{
    this.service.findById(this.filme.id!).subscribe(resposta=>{
      this.filme=resposta
    })
  }

  update():void{
    this.service.update(this.filme).subscribe(resposta=>{
      this.router.navigate(['filmes'])
      this.service.mensagem('Filme atualizado com sucesso!')
    }, err=>{
      this.service.mensagem('Verifique se todos os campos estão preenchidos corretamente')
    })
  }


}
