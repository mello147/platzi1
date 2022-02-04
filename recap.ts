const nombre: string = 'Jairo';

const sum = (a: number, b: number) => {

  return a + b
}

sum(1, 3);

class Persona {
  constructor(public age: number, public apellido: string) { }
}

const jairo = new Persona(15, 'Jairo');

jairo.age;
