const input = require('prompt-sync')();

const palavra = input('Digite a palavra: ');

array1 = palavra.split("");

array2 = palavra.split("");
array2.reverse();

//console.log(array1);
//console.log(array2);

if( JSON.stringify(array1) === JSON.stringify(array2) )
{
	console.log('Sao palindromos!')
}
