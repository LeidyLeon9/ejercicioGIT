let numero1 = 0;
let numero2 = 1;
let numerodeelementos = 0;
for (let i =1; i<100; i++){
    numerodeelementos = numero1 + numero2;
    numero1 = numero2;
    numero2 = numerodeelementos;
    console.log(numerodeelementos);
}