//Iteración #5: Filter

//5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean mayor que 18
console.log('//5.1')

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
let agesFilt = ages.filter(age => age > 18);
console.log(agesFilt);

//5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean par.
console.log('//5.2')

let ages2Filt = ages.filter(agePar => agePar % 2 == 0);
console.log(ages2Filt);

//5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of Legends'.
console.log('//5.3')
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
let streamersLL = streamers.filter(newStreamers => newStreamers.gameMorePlayed == 'League of Legends');
console.log(streamersLL);

/*5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
usar la funcion .includes() para la comprobación.*/
console.log('//5.4')

let streamersU = streamers.filter(newStreamersU => newStreamersU.name.includes('u') );
console.log(streamersU);

/*5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
.includes() para la comprobación.
Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
.age sea mayor que 35.*/
console.log('//5.5')

let streamerLeg = streamers.filter(person => person.gameMorePlayed.includes('Legends'));
for (value of streamerLeg){
    if (value.age > 35){
        value.gameMorePlayed = value.gameMorePlayed.toUpperCase();
    }
}
console.log(streamerLeg)

/*5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
los streamers que incluyan la palabra introducida en el input. De esta forma, si 
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.*/
console.log('//5.6 en el HTML iteration5_6.html')


/*5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
los streamers que incluyan la palabra introducida en el input. De esta forma, si 
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', 
me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
En este caso, muestra solo los streamers filtrados cuando hagamos click en el button.*/
console.log('//5.7 en el HTML iteration5_7.html')
