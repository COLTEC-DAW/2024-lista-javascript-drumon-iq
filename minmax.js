const input = require('prompt-sync')();

const value1= input('Digite o primeiro valor: ');
const value2= input('Digite o segundo valor: ');

function min(value1, value2)
{
	if(value1 > value2)
	{
		return value2
	}
	else if(value1 < value2)
	{
		return value1
	}
	else
	{
		return value1
	}
}

function max(value1, value2)
{
	if( value1 > value2 )
	{
		return value1
	}
	else if( value1 < value2 )
	{
		return value2
	}
	else
	{
		return value1
	}
}

console.log('Min is: ' + min(value1, value2));
console.log('Max is: ' + max(value1, value2));
