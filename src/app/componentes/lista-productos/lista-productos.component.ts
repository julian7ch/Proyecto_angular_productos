import { Component, OnInit } from '@angular/core';
import { listaDeProductos } from 'src/shared/listaDeProductos';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  titulos=listaDeProductos['es'];


  constructor() {
    console.log(this.titulos);

   }

  titulito:string='ID PRODUCTO';
  ngOnInit(): void {

  }

}
