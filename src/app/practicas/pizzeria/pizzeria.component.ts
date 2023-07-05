import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { confirmAlertComponent } from './confirm-alert/confirm-alert.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pizzeria',
  templateUrl: './pizzeria.component.html',
  styleUrls: ['./pizzeria.component.css']
})
export class PizzeriaComponent {
  pedidosForm!:FormGroup;
  
  nombreSelect: string = '';
  direccionSelect: string = '';
  telefonoSelect: string = '';

  tamanioSelect: string = 'Chica';
  jamonSelect: boolean = false;
  piniaelect: boolean = false;
  champinionSelect: boolean = false;
  ingredientesSelect: string = '';

  cantidadSelect!: number;

  totalSelected: number = 0;
  totalVentas: number = 0;
  
  pizzasSelected: any[] = [];
  ventasTotales: any[] = [];
  
  constructor(public dialogo: MatDialog, private readonly fb:FormBuilder) {
    this.pedidosForm = this.initForm();
  }
  
  initForm(){
    return this.fb.group({
      nombre: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      tamanio: ['Chica', [Validators.required]],
      ing1: [false],
      ing2: [false],
      ing3: [false],
      cantidad: [1, [Validators.required, Validators.min(1)]],
    });
  }

  onSubmit(){
    this.obtenerValores();
    this.agregarPizza();
  }

  obtenerValores(){
    const nom = this.pedidosForm.get('nombre')?.value;
    const dir = this.pedidosForm.get('direccion')?.value;
    const tel = this.pedidosForm.get('telefono')?.value;
    const tam = this.pedidosForm.get('tamanio')?.value;
    const ing1 = this.pedidosForm.get('ing1')?.value;
    const ing2 = this.pedidosForm.get('ing2')?.value;
    const ing3 = this.pedidosForm.get('ing3')?.value;
    const cant = this.pedidosForm.get('cantidad')?.value;

    this.nombreSelect = nom;
    this.direccionSelect = dir;
    this.telefonoSelect = tel;
    this.tamanioSelect = tam;
    this.jamonSelect = ing1;
    this.piniaelect = ing2;
    this.champinionSelect = ing3;
    this.cantidadSelect = cant;
  }

  agregarPizza() {
    let subtotal = 0;

    if(this.cantidadSelect > 0){
      switch (this.tamanioSelect) {
        case 'Chica':
          subtotal += 40;
          break;
        case 'Mediana':
          subtotal += 80;
          break;
        case 'Grande':
          subtotal += 120;
          break;
      }

      if(this.jamonSelect) {
        subtotal += 10;
        this.ingredientesSelect += 'Jamon ';
      }
      if(this.piniaelect){
        subtotal += 10;
        this.ingredientesSelect += 'Piña ';
      }
      if(this.champinionSelect){
        subtotal += 10;
        this.ingredientesSelect += 'Champiñones';
      }

      if(this.jamonSelect == false && this.piniaelect == false && this.champinionSelect == false){
        this.ingredientesSelect = 'Ninguno';
      }

      subtotal *= this.cantidadSelect;

      this.totalSelected += subtotal;

      this.pizzasSelected.push({
        "tamanio": this.tamanioSelect,
        "ingredientes": this.ingredientesSelect,
        "cantidad": this.cantidadSelect,
        "subtotal": subtotal
      });

      this.ingredientesSelect = '';
      this.tamanioSelect = 'Chica';
      this.jamonSelect = false;
      this.piniaelect = false;
      this.champinionSelect = false;
      this.cantidadSelect = 0;
      this.limpiarDetail();
    }
  }

  removePizza(index: number) {
    this.totalSelected -= this.pizzasSelected[index].subtotal;
    this.pizzasSelected.splice(index, 1);
  }

  openConfirmacion() {
    this.obtenerValores();

    if(this.nombreSelect != '' && this.direccionSelect != '' && this.telefonoSelect != ''){
    this.dialogo
      .open(confirmAlertComponent, {
        data: `Se realizará la venta por un total de $${this.totalSelected}`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.realizarVenta();
        }
      });
    }
  }

  realizarVenta() {
      if(this.nombreSelect != '' && this.direccionSelect != '' && this.telefonoSelect != '' && this.totalSelected > 0){
    
      this.totalVentas += this.totalSelected;

      this.ventasTotales.push({
        "nombre": this.nombreSelect,
        "direccion": this.direccionSelect,
        "telefono": this.telefonoSelect,
        "total": this.totalSelected
      });

      this.nombreSelect = '';
      this.direccionSelect = '';
      this.telefonoSelect = '';
      this.totalSelected = 0;
      this.pizzasSelected = [];
      this.limpiarCliente();
    }
  }

  limpiarDetail(){
    this.pedidosForm.get('tamanio')?.setValue('Chica');
    this.pedidosForm.get('ing1')?.setValue(false);
    this.pedidosForm.get('ing2')?.setValue(false);
    this.pedidosForm.get('ing3')?.setValue(false);
    this.pedidosForm.get('cantidad')?.setValue(1);
  }

  limpiarCliente(){
    this.pedidosForm.get('nombre')?.setValue('');
    this.pedidosForm.get('direccion')?.setValue('');
    this.pedidosForm.get('telefono')?.setValue('');

    this.pedidosForm.get('nombre')?.markAsUntouched();
    this.pedidosForm.get('direccion')?.markAsUntouched();
    this.pedidosForm.get('telefono')?.markAsUntouched();
  }


}




