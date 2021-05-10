import { SessaoService } from './../sessao.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sessao } from '../sessao.model';

@Component({
  selector: 'app-sessao-delete',
  templateUrl: './sessao-delete.component.html',
  styleUrls: ['./sessao-delete.component.css']
})
export class SessaoDeleteComponent implements OnInit {
  sessao: Sessao = {
    id: '',
    data: '',
    hora_fim: '',
    hora_inicio: '',
    tipo_animacao: '',
    tipo_audio: '',
    valor_ingresso: ''

  }

  constructor(private service: SessaoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.sessao.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void {
    this.service.findById(this.sessao.id!).subscribe(resposta => {
      this.sessao = resposta
    })
  }

  delete(): void {
    this.service.delete(this.sessao.id!).subscribe(resposta => {
      this.router.navigate(['sessao'])
      this.service.mensagem('Sessão excluída com sucesso!')
    }, err => {
      this.service.mensagem(err.error.error);

    })
  }
  cancelar():void{
    this.router.navigate(['sessao'])
  }

}
