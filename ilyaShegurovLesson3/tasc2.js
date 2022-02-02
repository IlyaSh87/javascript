/*tasc2: С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в
зависимости от находящихся в ней товаров. */


const clientCard = [
['t-shirt', 2000],
['sweater', 5000],
['boots', 12000],
['jeans', 2345],

];

const maxSum = countBascet(clientCard);


function countBascet(){
	let result = 0;
	for (let i of  clientCard) {
		result = result+ i[1];
	}
	return result
}
//видим результат

console.log(countBascet(clientCard))
