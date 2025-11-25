import { Component } from '@angular/core';
import { MatToolbar } from "@angular/material/toolbar";
import { MatFormField, MatLabel } from "@angular/material/input";
import { MatAnchor } from "@angular/material/button";
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-festivos',
  imports: [MatToolbar, MatFormField, MatLabel, MatAnchor, FormsModule, NgxDatatableModule],
  templateUrl: './festivos.html',
  styleUrl: './festivos.css',
})
export class Festivos {
public textobusqueda: string = '';

public Buscar(){}

public Agregar(){}

public Delete(){}

public Modificar(){}
}
