const prompt = require('prompt-sync')();
const number = prompt('Digite a quantidade de linhas: ');

for(let linha_atual=1; linha_atual <= number; linha_atual++)
{
	let linha = ' '
	for(let tam_linha = linha_atual+1; tam_linha > 0; tam_linha--)
	{
		linha+='#'
	}
	console.log(linha)
}
