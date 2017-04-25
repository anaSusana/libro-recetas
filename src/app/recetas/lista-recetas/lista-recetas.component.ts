import { Component, Output, EventEmitter } from '@angular/core';
import { Receta } from '../receta';

@Component({
  selector: 'app-lista-recetas',
  templateUrl: './lista-recetas.component.html',
  styleUrls: ['./lista-recetas.component.css']
})
export class ListaRecetasComponent  {
 recetas: Array<Receta> = [];
 @Output() recetaSeleccionada = new EventEmitter<Receta>();

 receta = new Receta('Pabellón Criollo', 'El pabellón criollo es un plato tradicional que forma parte de la gastronomía venezolana, y es reconocido como el plato nacional por excelencia. Está compuesto por arroz blanco cocido, carne mechada, caraotas negras y tajadas de plátano maduro frito.','http://www.hdwallpapers.in/walls/minion_bananas-wide.jpg', ['100 g de arroz', '150 g de carne de ternera', '1 cebolla', '2 dientes de ajo', '100 g de frijoles negros', '1/2 plátano maduro', '15 g de queso', 'aceite y sal al gusto.']);
  constructor() { }

  seleccionarReceta() {
    this.recetaSeleccionada.emit(this.receta);

  }
}
