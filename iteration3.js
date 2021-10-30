//Iteración #3: Spread Operator

//3.1 Dado el siguiente array, crea una copia usando spread operators.
console.log('//Iteración #3: 3.1')
const pointsList = [32, 54, 21, 64, 75, 43]
let newPointsList = [...pointsList];
console.log(newPointsList)

//3.2 Dado el siguiente objeto, crea una copia usando spread operators.
console.log('//Iteración #3: 3.2')
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
let newToy = {...toy}
console.log(newToy)

//3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos.
console.log('//Iteración #3: 3.3')
let pointsList2 = [32, 54, 21, 64, 75, 43];
let pointsList3 = [54,87,99,65,32];
let allPointsList = [...pointsList2, ...pointsList3]
console.log(allPointsList)

//3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.
console.log('//Iteración #3: 3.4')
const toy2 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toy2Update = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}
let allToys = {...toy2, ...toy2Update}
console.log(allToys)

//3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo, usando spread operatos.
console.log('//Iteración #3: 3.5')
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
let newColores = [...colors.slice(0,2), ...colors.slice(3)];
console.log(newColores)