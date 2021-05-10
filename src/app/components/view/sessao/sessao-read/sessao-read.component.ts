import { SessaoService } from './../sessao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sessao } from '../sessao.model';

@Component({
  selector: 'app-sessao-read',
  templateUrl: './sessao-read.component.html',
  styleUrls: ['./sessao-read.component.css']
})
export class SessaoReadComponent implements OnInit {


  constructor(private router: Router, private service: SessaoService) { }
  sessao: Sessao[] = []
  displayedColumns: string[] = ['id','data', 'hora_inicio', 'hora_fim','valor_ingresso', 'tipo_animacao','tipo_audio', 'acoes'];


  ngOnInit(): void {
    this.findAll()
  }

  novaSessao():void{
    this.router.navigate(['sessao/salas'])
  }

  findAll(){
    this.service.findAll().subscribe(resposta =>{
      this.sessao=resposta;
    })
  }

}
