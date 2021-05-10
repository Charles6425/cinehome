import { SessaoService } from './../sessao.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sessao } from '../sessao.model';

@Component({
  selector: 'app-sessao-read-all',
  templateUrl: './sessao-read-all.component.html',
  styleUrls: ['./sessao-read-all.component.css']
})
export class SessaoReadAllComponent implements OnInit {
  id_sala: String = ''
  sessao: Sessao[] = []
  displayedColumns: string[] = ['id','data', 'hora_inicio', 'hora_fim','valor_ingresso', 'tipo_animacao','tipo_audio'];

  constructor(private service: SessaoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id_sala = this.route.snapshot.paramMap.get('id_sala')!
    this.findAllSalas()
  }

  findAllSalas(): void {
    this.service.findByAllSalas(this.id_sala).subscribe((resposta) => {
      this.sessao = resposta

    })

  }

}
