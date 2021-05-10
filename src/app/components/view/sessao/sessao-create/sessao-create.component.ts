import { SessaoService } from './../sessao.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Sessao } from '../sessao.model';

@Component({
  selector: 'app-sessao-create',
  templateUrl: './sessao-create.component.html',
  styleUrls: ['./sessao-create.component.css']
})
export class SessaoCreateComponent implements OnInit {
  id_sala: String = ''
  id_filme: String = ''

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
    this.id_sala = this.route.snapshot.paramMap.get('id_sala')!
    this.id_filme = this.route.snapshot.paramMap.get('id_filme')!
  }

  novaSessao(): void {
    this.router.navigate(['sessao/salas'])
  }

  create(): void {
    this.service.create(this.sessao, this.id_sala, this.id_filme).subscribe(resposta => {
      this.router.navigate(['sessao'])
      this.service.mensagem("Sessão cadastrada com sucesso!")
    },err => {
      this.service.mensagem('Verifique se todos os campos estão preenchidos corretamente')
    })
  }

  cancelar(): void {
    this.router.navigate(['sessao'])
  }

}
