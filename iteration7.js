//Iteración #7: Reduce

//7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de los alumnos usando la función .reduce().
console.log('//7.1')
const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];
let newExams = exams.reduce((suma, examen) => suma + examen.score, 0);
console.log(newExams)

/*7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los 
alumnos que esten aprobados usando la función .reduce().*/
console.log('//7.2')

let aprovadoExam = exams.reduce((suma2, examen)=>{
    if (examen.score >= 5 ){
        suma2 = suma2+examen.score
    }
    return suma2;
}, 0)
console.log(aprovadoExam);

// 7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().
console.log('//7.2')
let hh = exams.reduce((sum, a) => { return sum + a.score },0)/(exams.length||1);
console.log(hh)