const input = require('prompt-sync')();
const palavra = input('Digite a palavra: ');
const letra = input('Digite a letra: ');

function countChars(palavra,letra)
{
	array = palavra.split("");
	let count = 0
	for(const item of array)
	{
		if(letra === item) count++;
	}
	return count
}
console.log('Repeticoes: ' + countChars(palavra, letra))
