import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  form: FormGroup;

  constructor(private readonly fb: FormBuilder) {

   }
  ngOnInit(): void {
    this.createForm();

    this.form.get('tipoProducto')?.setValue(2);

    if(this.form.get('tipoProducto')?.value===2){


    this.form.get('nombre')?.setValue('Julian Calderon Henao');}

    this.form.setValue({idProducto:23,tipoProducto:3,precio:150,nombre:'jalisxo',descuento:true} )
  }

  createForm(): void{
    this.form =this.fb.group({
      idProducto: ['', [Validators.required, Validators.maxLength(10)]],
      tipoProducto : ['',[Validators.required]],
    nombre : ['',[Validators.required,Validators.maxLength(40)]],
    precio : [0,[Validators.required,Validators.min(0), Validators.maxLength(10)]],
    descuento : ['false']
    });
  }

}
