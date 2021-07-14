import { Component, OnInit } from '@angular/core';
import {Productos,ListaProductos} from '../../interfaces/productos'

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  lista=ListaProductos;

  constructor() { }

  ngOnInit(): void {
  }

}
