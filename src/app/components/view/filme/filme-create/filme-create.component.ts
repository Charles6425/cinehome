import { FilmeService } from './../filme.service';
import { Filme } from './../filme.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-filme-create',
  templateUrl: './filme-create.component.html',
  styleUrls: ['./filme-create.component.css']
})
export class FilmeCreateComponent implements OnInit {
  filme: Filme = {
    imagem: '',
    titulo: '',
    descricao: '',
    duracao: ''

  }

  titulo = new FormControl('', [Validators.minLength(3)])
  descricao = new FormControl('', [Validators.minLength(10)])
  duracao = new FormControl('', [Validators.minLength(4)])

  constructor(private service: FilmeService, private router: Router) { }

  ngOnInit(): void {

  }

  create(): void {
    this.service.create(this.filme).subscribe((resposta) => {
      this.router.navigate(['filmes']);
      this.service.mensagem("Filme cadastrado com sucesso!")
    }, err => {
      for (let i = 0; i < err.error.errors.length; i++) {
        this.service.mensagem(err.error.errors[i].message)
      }

    })
  }

  cancel(): void {
    this.router.navigate(['filmes']);
  }

  getMessage() {
    if (this.titulo.invalid) {
      return "O campo Título deve conter entre 3 e 150 caracteres";
     }
    if (this.descricao.invalid) {
      return "O campo Descrição deve conter entre 10 e 20000 caracteres";
    }
    if (this.duracao.invalid) {
      return "O campo Duração deve ser preenchido, ex.: 9:00";
    }
    return false
  }



}
