import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-quejas',
  templateUrl: './quejas.component.html',
  styleUrls: ['./quejas.component.scss']
})
export class QuejasComponent implements OnInit {

  formulario= new FormGroup({
    nombre:new FormControl('',[Validators.required]),
    pais: new FormControl('',[Validators.required]),
    descripcion:new FormControl('',[Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    window.location.href="/gracias"
  }
  
}