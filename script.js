

/*Vamos criar alguns arrays, e refletir a respeito deles:
Crie um array com 3 itens do tipo String
Crie um array com 3 itens do tipo Number
Crie um array com uma String, um número e um booleano;
Crie um array com apenas um valor. Um número.
Crie um array sem nenhum valor dentro.*/


const arrayStrings = ["renata,", "jhon", "lara"];
const arrayNumber = [10, 8, 6];
const arrayMisto = [22, "bola", true];
const arrayAlgumValor = [100];
const arraySemValor = [];


/*Vamos tentar acessar índices específicos dos arrays construídos anteriormente:
Cheque o length do primeiro array. O que acontece se tentarmos acessar o índice 3 deste array?
Verifique se o terceiro array inclui cada um dos itens;
No quarto array, imprima o valor do único item. 
Observe qual o seu índice, e imprima seu tamanho.*/

//Cheque o length do primeiro array. O que acontece se tentarmos acessar o índice 3 deste array?
console.log(arrayStrings.length); //verifica quantos itens a array tem
console.log(arrayStrings[3]);

//Verifique se o terceiro array inclui cada um dos itens;
console.log(arrayMisto);  //verifico o valor que esta sendo guardado ali dentro do array, se esta tudo certinho

//No quarto array, imprima o valor do único item. 
console.log(arrayAlgumValor[0]);

//tambem podemos verificar dessa forma
console.log(arrayMisto[2] === "boolean");

//console.log(array[array.length-1]) // o length retorna quantos indices a array tem e o -1 


//-------------------------------------------------------------------------------------------------------
/*Crie uma cópia do primeiro array, utilizando a atribuição com sinal de igual.
Faça push() de uma nova string no array copiado
Imprima os dois arrays. Há diferença?
Como podemos resolver isso?
Com o array copiado corretamente, remova os itens dos índices 2 e 3 do array copiado.
Imprima novamente ambos os arrays */

const arrayOriginal = ["renata,", "jhon", "lara"];
const arrayCopia = arrayOriginal.slice() //cria uma cópia de parte de um array, sem modificar o array original.  

arrayCopia.push("Kelvin") //adiciona o item ao ultimo indice da array na original e copia

console.log("array original", arrayOriginal);
console.log("array copia", arrayCopia);

//Com o array copiado corretamente, remova os itens dos índices 2 e 3 do array copiado.
console.log("array copia", arrayCopia)

arrayCopia.splice(2, 2) //qual indice quer remover, e apartir de quantos indices a partir dele coloquei 2 tbm pq quero que remova o indice 2e3

console.log(arrayCopia);

/*Crie um array. Ele deve possuir apenas números, e estes números não devem seguir nenhuma ordem específica. Por enquanto, não vamos imprimir o array.
Depois disso, crie uma cópia deste array utilizando o método slice().
No array copiado: 
Remova o último item 
Adicione o número 6 no fim do array
Remova o número que está no índice 2 do array
Por fim, imprima os dois arrays*/

arrayNum = [21, 5, 3, 7]; // 
arrayNumCopia = arrayNum.slice(); //slice faz uma cópia
arrayNumCopia.pop(); //Remove o último item 
arrayNumCopia.push(6);//Adiciona o item desejado no final do array
arrayNumCopia.splice(2, 1);//Remove o número que está no índice 2 do array seguido da quantidade de item a ser removido. a partir 
console.log(arrayNum, arrayCopia); //imprime os arrays

