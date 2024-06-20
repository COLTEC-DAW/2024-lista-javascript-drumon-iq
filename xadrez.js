const prompt = require('prompt-sync')();

qntd_linhas = prompt('Digite a quantidade de linhas: ');

for(let i=0; i < qntd_linhas; i++)
{
	if(i % 2 === 0)
	{
		console.log('# # # # ')
	}else 
	{
		console.log(' # # # #')
	}

}
