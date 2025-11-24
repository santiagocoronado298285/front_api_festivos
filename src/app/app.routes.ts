import { Routes } from '@angular/router';
import { Inicio } from '../feature/inicio/inicio'; 

export const routes: Routes = [
    { path: '', redirectTo: 'Inicio', pathMatch: 'full' }, // Redirige la raíz a 'Inicio'
    { path: 'Inicio', component: Inicio },
];
