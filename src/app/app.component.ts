import { Product } from './products.model';
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'jairo';
  withdImage=15;
  age = 90;
  img = 'https://source.unsplash.com/random';
  btnDisable = false;
  inputValue = 123;
  person = {
    edad: 25,
    nombre: 'Jairo B',
    avatar: 'https://source.unsplash.com/random'

  }

  products:Product[]= [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category:'All'

    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

  newName:string='';

  nombres :string []= ['Test','Jairo','Pedrito','Perez'];

  toggleButton() {
    this.btnDisable = !this.btnDisable;
  }

  incrementarEdad() {
    this.person.edad +=1;
  }

  scrollEvent(event:Event){

    const evento=event.target as HTMLElement;
    console.log('Posicion'+evento.scrollTop)

  }

  changeName(event:Event){
    const evento=event.target as HTMLInputElement;
    this.person.nombre=evento.value;
  }

  addName(){
    this.nombres.push(this.newName);
    this.newName='';

  }

  deleteName(index:number){
    this.nombres.splice(index,1);

  }
}
