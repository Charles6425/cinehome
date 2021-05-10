import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sessao } from '../sessao.model';
import { SessaoService } from '../sessao.service';

@Component({
  selector: 'app-sessao-update',
  templateUrl: './sessao-update.component.html',
  styleUrls: ['./sessao-update.component.css']
})
export class SessaoUpdateComponent implements OnInit {


  sessao: Sessao = {
    id: '',
    data: '',
    hora_inicio: '',
    hora_fim: '',
    valor_ingresso: '',
    tipo_animacao: '',
    tipo_audio: ''

  }

  constructor(private router: Router, private service: SessaoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sessao.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void {
    this.service.findById(this.sessao.id!).subscribe(resposta => {
      this.sessao = resposta
    })
  }
  cancelar(): void {
    this.router.navigate(['sessao'])
  }

  update(): void {
    this.service.update(this.sessao).subscribe(resposta => {
      this.router.navigate(['sessao'])
      this.service.mensagem('Sessão atualizada com sucesso!')
    }, err => {
      this.service.mensagem('Verifique se todos os campos estão preenchidos corretamente')
    })
  }



}
