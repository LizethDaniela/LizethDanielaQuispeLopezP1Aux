//PREGUNTA 2:
//Se desea construir una calculadora de propinas muy simple para cada vez que vaya a
//comer en un restaurante. Supongamos que, en su país, es habitual dar una propina
//del 15% si el valor de la factura está entre 50 y 300. Si el valor es diferente, la propina
//es del 20%.
//Sus tareas:
//Parte 1
//1. Calcule la propina, dependiendo del valor de la factura. Cree una variable
//llamada ‘tip' para esto. No está permitido usar una declaración if / else
let tip={
    factura:120,
    propina:120,
};
tip.propina=(tip.propina >=50 && tip.propina<=300)? tip.propina*0.15: tip.propina*0.20;
console.log(tip.propina)

//2. Imprima una cadena en la consola que contenga el valor de la factura, la
//propina y el valor final. (factura + propina). Ejemplo: "La factura fue 275, la
//propina fue 41,25 y el valor total 316.25 "
const total= tip.factura+tip.propina
console.log(`La factura fue ${tip.factura}, la propina fue ${tip.propina} y el valor total es ${total}`)
//3. Escriba una arrow function 'calcTip' que tome un valor de factura como entrada
//y devuelva la propina correspondiente, calculada según las reglas anteriores.
const calcTip= (factura)=>{
    const propina=(factura >=50 && factura<=300)? factura*0.15: factura*0.20;
    return propina;
}
console.log("La propina es de:", calcTip(200));
//Parte 2
//4. Cree un array de facturas ‘bills’ que contenga los datos de prueba.
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
//5. Cree arrays vacíos para las propinas y los totales (‘tips' y 'totals')
const tips=[];
const totals=[];
//6. Utilice la función 'calcTip' que escribimos antes para calcular propinas y valores
//totales (factura + propina) para cada valor de factura en la matriz de facturas y
//almacénelos en los arrays correspondientes.
const calcTip=(bills)=>{
    for(let i=0; i<=bills.length;i++){
        const fact = bills[i];
        const prop=(fact >=50 && fact<=300)? fact*0.15: fact*0.20;
        return fact+prop;
    }
};
console.log(calcTip([22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]));
//7. Cree una función para calcular el promedio de cualquier array que se le pase
//como argumento y úselo para calcular el promedio de los tres arrays que tiene
//(‘bills’, ‘tips’ y ‘totals’)


//Datos de prueba para la parte 1:
//Factura 1: 120
//Factura 2: 200
//Factura 3: 275
//Datos de prueba para la parte 2:
//bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]