import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular002';

  listaEstudiante: any [] = [
    {
    nombre: "John Doe",
    estado: 'Aprobado',
  },
  {
    nombre: "Mary Jhonson",
    estado: 'Aprobado',
  },
  {
    nombre: "Luis Torres",
    estado: 'Suspenso',
  },
  {
    nombre: "Rebeca Thomson",
    estado: 'Retirado',
  }
];

mostrar:boolean = true;

ejecutar():void{
this.mostrar = !this.mostrar;
}
}
