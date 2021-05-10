import { Sala } from './../sala.model';
import { SalaService } from './../sala.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sala-read',
  templateUrl: './sala-read.component.html',
  styleUrls: ['./sala-read.component.css']
})
export class SalaReadComponent implements OnInit {
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
