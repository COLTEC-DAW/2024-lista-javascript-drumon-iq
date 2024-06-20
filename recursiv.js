const input = require('prompt-sync')();
const value1 = input('Digite o numero: ');
const value2 = input('Digite o divisor: ');

let mod2 = function(num1)
{
	return mod(num1, 2)
}

let mod = function (num1, num2)
{
	if(num1 > 1)
	{
		return mod(num1-num2, num2)
	}

	if(num1 === 0)
	{
		return true
	}
	else 
	{
		return false
	}
}

console.log('É divisivel por ' + value2 + '? ' + mod(value1, value2));
console.log('É divisivel por 2? ' + mod2(value1));
