//PREGUNTA 1:
//Hay dos equipos de gimnasia, Ricks y Mortys. Compiten entre ellos 3 veces. ¡El
//ganador con la puntuación promedio más alta gana un pase de aventura!
//Tus tareas:
//Datos 1: Ricks: 96, 108 y 89. Mortys: 88, 91 y 110
//Datos 2: Ricks: 97, 112 y 101. Mortys: 109, 95 y 123
//Datos 3: Ricks: 97, 112 y 101. Mortys: 109, 95 y 106
console.log("hola a todos");


//1. Calcule el puntaje promedio de cada equipo, utilizando los datos de prueba
//proporcionados al final del enunciado.
const Ricks= [96,108,89];
const Mortys= [88,91,110];
let suma=0;
for(let i=0; i<Ricks.length;i++){
    suma+=Ricks[i];
}
let promedio= suma/3;
console.log("El promedio del equipo Ricks es:", promedio);
let suma1=0;
for(let i=0; i<Mortys.length;i++){
    suma1+=Mortys[i];
}
let promedio1= suma1/3;
console.log("El promedio del equipo Mortys es:", promedio1);
//2. Compare los puntajes promedio del equipo para determinar el ganador de la
//competencia, e imprimirlo en la consola. No olvides que puede haber un
//empate, así que toma en cuenta ese caso también.
if (promedio>promedio1){
    console.log("El ganador de la competencia es el equipo Ricks");
}if(promedio1>promedio){
    console.log("El ganador de la competencia es el equipo Mortys");
} if(promedio==promedio1) {
    console.log("Amos equipos empataron");
}

//3. Incluya el requisito de una puntuación mínima de 100. Con esta regla el equipo
//solo gana si tiene una puntuación más alta que el otro equipo, y además tiene
//una puntuación de al menos 100 puntos.
const requisito=100;
if (promedio>promedio1 && promedio>=requisito){
    console.log("El ganador de la competencia es el equipo Ricks");
}if(promedio1>promedio && promedio1>=requisito){
    console.log("El ganador de la competencia es el equipo Mortys");
}// if(promedio==promedio1 && promedio>=requisito) {
    console.log("Ninguno llego a la puntuacion minima");
//}
//4. ¡La puntuación mínima también se aplica a un empate! Entonces, un empate
//solo ocurre cuando ambos equipos tienen la misma puntuación y ambos tienen
//una puntuación mayor o igual a 100 puntos. De lo contrario, ningún equipo
//gana el premio.
if (promedio==promedio1 && (promedio>=requisito && promedio1>=requisito)){
    console.log("Ambos equipos empataron");
} else console.log("Ningun equipo gana el premio");
 //if((promedio && promedio1)<=requisito ) {
   // console.log("Ambos equipos empataron");
//}
//5. Cree una arrow function 'calcAverage' para calcular el promedio de 3
//puntuaciones
const calcAverage=(a,b,c)=>{
    return (a+b+c)/3;
}
console.log(calcAverage(97,112,101));

//6. Usa la función para calcular el promedio de ambos equipos.
const calcAverage1=(a,b,c)=>{
    return ((a+b+c)/3);
}
console.log("El promedio del equipo Ricks es:", calcAverage1(97,112,101));
console.log("El promedio del equipo Mortys es:",calcAverage1(109,95,123));
//7. Cree una función 'checkWinner' que tome la puntuación media de cada equipo.
//como parámetros ('avgRIcks' y 'avgMortys'), y luego muestre el ganador, junto
//con los puntajes, de acuerdo con la regla anterior. Ejemplo: "Los koalas ganan
//(30 contra 13)"
const puntuacion =0;
const checkWinner= (avgRIcks, avgMortys)=>{
    avgRIcks= {
        puntuacion1=97,
        puntuacion2=112,
        puntuacion3=101,
    }
    avgMortys= {
        puntuacion1=109,
        puntuacion2=95,
        puntuacion3=123,
    }
    if(avgMortys.puntuacion1>avgMortys.puntuacion2 && avgMortys.puntuacion1<avgMortys.puntuacion3) {
         puntuacion= avgMortys.puntuacion1;
    }
    if(avgMortys.puntuacion2>avgMortys.puntuacion1 && avgMortys.puntuacion2<avgMortys.puntuacion3) {
        puntuacion= avgMortys.puntuacion1;
   }
    if(avgMortys.puntuacion3>avgMortys.puntuacion1 && avgMortys.puntuacion3<avgMortys.puntuacion2) {
        puntuacion= avgMortys.puntuacion1;
}
    if(avgMortys.puntuacion2>avgMortys.puntuacion3 && avgMortys.puntuacion2<avgMortys.puntuacion1) {
        puntuacion= avgMortys.puntuacion1;
    }
}
//8. Utilice la función 'checkWinner' para determinar el ganador para los datos 1 y
//Datos 2
