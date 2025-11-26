import { Component, OnInit } from '@angular/core';
import { MatToolbar } from "@angular/material/toolbar";
import { MatFormField, MatLabel } from "@angular/material/input";
import { MatAnchor } from "@angular/material/button";
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FestivoService } from '../../core/services/festivoService';
import { response } from 'express';
import { error } from 'console';
import { FestivoModel } from '../../shared/entities/FestivoModel';

@Component({
  selector: 'app-festivos',
  imports: [MatToolbar, MatFormField, MatLabel, MatAnchor, FormsModule, NgxDatatableModule],
  templateUrl: './festivos.html',
  styleUrl: './festivos.css',
})
export class Festivos implements OnInit {
  public textobusqueda: string = '';
  public festivos: FestivoModel[] = [];
  public columnas = [
    { name: "nombre", prop: "nombre" },
    { name: "dia", prop: "dia" },
    { name: "mes", prop: "mes" }
  ]

  constructor(private festivoservice: FestivoService) {
  }
  ngOnInit(): void {
    this.listarfestivos()
  }

  public listarfestivos() {
    this.festivoservice.listarfestivos().subscribe({
      next: (response) => {
        this.festivos = response;
      },
      error: (error) => {
        window.alert(error.message);
      }
    });
  }

  public Buscar() { }

  public Agregar() { }

  public Delete() { }

  public Modificar() { }
}
