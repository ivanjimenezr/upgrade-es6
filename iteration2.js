//Iteración #2: Destructuring

// 2.1 En base al siguiente javascript, crea variables en base a las propiedades 
// del objeto usando object destructuring e imprimelas por consola. Cuidado, 
// no hace falta hacer destructuring del array, solo del objeto.

console.log('//Iteración #2: 2.1')
let game = {title: 'The last of us 2', gender: ['action', 'zombie', 'survival'], year: 2020}
let {title,gender,year} = game;
console.log(title,gender,year);

console.log('//Iteración #2: 2.2')
// 2.2 En base al siguiente javascript, usa destructuring para crear 3 variables 
// llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
// imprimelo por consola.

let fruits = ['Banana', 'Strawberry', 'Orange'];
let [fruit1,fruit2,fruit3] = fruits;
console.log(fruit1,fruit2,fruit3);

console.log('//Iteración #2: 2.3')
// 2.3 En base al siguiente javascript, usa destructuring para crear 2 variables igualandolo a la función e imprimiendolo por consola.

let animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};
//let a, b;
let {name:nombre2, race} = animalFunction();
console.log('nombre2: ', nombre2); 
console.log('race: ', race);

console.log('//Iteración #2: 2.4')
/*2.4 En base al siguiente javascript, usa destructuring para crear las 
variables name y itv con sus respectivos valores. Posteriormente crea 
3 variables usando igualmente el destructuring para cada uno de los años 
y comprueba que todo esta bien imprimiendolo.*/

const car = {nombre: 'Mazda 6', itv: [2015, 2011, 2020] }

let {nombre, itv} = car;
let [primero, segundo,tercero] = itv;

console.log('name: ',nombre);
console.log('itv: ',itv);
console.log('primero: ',primero);
console.log('segundo: ',segundo);
console.log('tercero: ',tercero);
