import { Component, OnInit } from '@angular/core';
import { Sala } from '../sala.model';
import { SalaService } from '../sala.service';

@Component({
  selector: 'app-sala-sessao',
  templateUrl: './sala-sessao.component.html',
  styleUrls: ['./sala-sessao.component.css']
})
export class SalaSessaoComponent implements OnInit {

  salas: Sala[]=[]

  displayedColumns: string[] = ['id', 'nome', 'qt_assentos','sessoes'];
  constructor(private service: SalaService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(resposta =>{
      this.salas=resposta;
    })
  }


  
}
