import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../../enviroments/enviroment';
import { Observable } from 'rxjs';
import { FestivoModel } from '../../shared/entities/FestivoModel';

@Injectable({
  providedIn: 'root',
})
export class FestivoService {
  private url: string;
  constructor(private http: HttpClient) {
    this.url = `${enviroment.urlService}festivos/`;
  }

  public listarfestivos(): Observable<FestivoModel[]> {
    return this.http.get<FestivoModel[]>(`${this.url}listarfestivos`);
  }

}
