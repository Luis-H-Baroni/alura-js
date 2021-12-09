<<<<<<< HEAD
//var tem escopo mais glboal e sem controle, pode alterar valores de variaveis em outros blocos de codigo. não se utiliza. não se utiliza.
=======
//var tem escopo mais glboal e sem controle, pode alterar valores de variaveis em outros blocos de codigo. não se utiliza.
>>>>>>> 58e6d6d50a1fe6ea0a02ed961c9152ce36f9b175
var variavel;

//const não permite que mude o valor armazenado. Deve ser declarada e inicializada antes de usar.
const variavel2;

//let também deve ser declarada
let forma = "retangulo";
let altura = 2;
let comprimento = 5;
let area;

if (forma === "retangulo") {
    area = altura * comprimento;
}

console.log("Area:", area);