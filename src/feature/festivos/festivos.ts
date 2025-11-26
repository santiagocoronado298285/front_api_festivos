import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MatToolbar } from "@angular/material/toolbar";
import { MatFormField, MatLabel, MatInput } from "@angular/material/input";
import { MatButton } from "@angular/material/button";
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FestivoService } from '../../core/services/festivoService';
import { FestivoModel } from '../../shared/entities/FestivoModel';

@Component({
  selector: 'app-festivos',
  imports: [MatToolbar, MatFormField, MatLabel, MatInput, MatButton, FormsModule, NgxDatatableModule],
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

  constructor(
    private festivoservice: FestivoService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    this.listarfestivos()
  }

  public listarfestivos() {
    this.festivoservice.listarfestivos().subscribe({
      next: (response) => {
        this.festivos = response;
      },
      error: (error) => {
        if (isPlatformBrowser(this.platformId)) {
          window.alert(error.message);
        }
      }
    });
  }

  public Buscar() { }
  public Agregar() { }
  public Delete() { }
  public Modificar() { }
}
