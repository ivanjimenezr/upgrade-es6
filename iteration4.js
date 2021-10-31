
//4.1 Dado el siguiente array, devuelve un array con sus nombres utilizando .map().
console.log('//4.1');
const users = [
	{id:1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
let usersName = users.map(usuario => usuario.name);
console.log(usersName);

/*4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
empiece por 'A'.*/
console.log('//4.2');
const users2 = [
	{id:1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
const newUsers2 = users2.map(item => {
    if (item.name.charAt(0) === 'A'){
        item.name = 'Anacleto';}
    return item
});
console.log(newUsers2)

// 4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
// de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
// cuando el valor de la propiedad isVisited = true.
console.log('//4.3');
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];
const newCities = cities.map(items => {
    if (items.isVisited === true){
        items.name += ' (Visitado)' ;
    }
    return items;
});
console.log(newCities)
