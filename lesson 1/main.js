console.info('%c Урок 1 (Операторы & If, Switch)', 'color: red; font: 700 1.5rem Tahoma;')

console.log('Пример 1: ', 6 % 2)
console.log('Пример 2: ', 7 % 4)
console.log('Пример 3: ', 10 == '10')
console.log('Пример 4: ', 10 === '10')
console.log('Пример 5: ', 'A' > 'a')
console.log('Пример 6: ', 'A' < 'a')
console.log('Пример 7: ', 'A' >= 'a')
console.log('Пример 8: ', 10 != '10')
console.log('Пример 9: ', 10 !== '10')
console.log('Пример 10: ', 'A' >= 0) //  Казалось бы результат очевидно будет тру т.к. булеан от А = тру, но из-за преобразованиа строки в число нам возвращаеться NaN (не число), которое = false. По этому в консоли мы увидим false
console.log('Пример 11: ', '5' >= 0) //  Вроде бы ситуация аналогичная, но приведение к числу строки, которая в своей основе имеет числа возвращает нам число. Т.е. строка'5' при образовании станет числом 5, а 5 очевидно больше 0


let a = 0;
console.log('Пример 12: ', a++)
console.log('Пример 13: ', ++a)
console.log('Пример 14: ', --a)
console.log('Пример 15: ', a--)

let b = 10
console.log('Пример 16: ', b-- === 10) // постфиксный инкремент отработает только на 24 строке, по этому сравнение возвращает нам true
b = 10
console.log('Пример 17: ', --b === 10) // префиксный инкремент отработал на этой строке, по этому b = 9, return false



console.log('Пример 20: ', true || true || true)
console.log('Пример 21: ', !true || false || true)
console.log('Пример 18: ', true && true && true)
console.log('Пример 19: ', true && true && !true)
console.log('Пример 22: ', !true)
console.log('Пример 23: ', true && true || !true)
b = 12
console.log('Пример 24: ', true && (--b === 11) || !(5*5 === 123))

console.log('Пример 25: ', 1 === 1 ? 'true' : 'false')
console.log('Пример 26: ', 1 === 2 ? 'true' : 'false')


// ПРАКТИКА СРАВНЕНИЙ В КОНСТРУКЦИИ ИФ И СВИТЧ

let lang = 'JavaScript'

if(lang == 'Python' || lang == 'PHP'){

	if (lang == 'Python'){
		console.log('Пример 27: ', 'lang = Python')
	} else {
		console.log('Пример 27: ', 'lang = PHP')
	}
} else if (lang == 'C++' || lang == 'C#' || lang == 'JAVA' || lang == 'JavaScript') {
	switch (lang) {
		case "JavaScript":
			console.log('Пример 27: ', 'lang = JavaScript')
			break;
		case "C++":
			console.log('Пример 27: ', 'lang = C++')
			break;
		case "C#":
			console.log('Пример 27: ', 'lang = C#')
			break;
		case "JAVA":
			console.log('Пример 27: ', 'lang = JAVA')
			break;
		default:
			console.log('Пример 27: ', 'JAVASCRIPT TOP')
	}
} else {
	console.log('Пример 27: ', 'lang not found')
}

// Так, что-то не то, ты нам обещал более реальный пример. Ок, сейчас будет

/* Допустим вам сказали вывести надпись "нет в наличии" если товара на складе больше нет.
Допустим за наличие товара отвечает переменная count. Если она = 0 или неопределенна либо налл и т.д. нужно указівать, что товара нет в наличии, если товаров у нас от 1 до 4, то заканчивается, если 5 и больше, то "достаточно"
думаю ТЗ вполне понятное, давайте сделаем его
 */

let count = 6;

if (count > 0){
	switch (count) {
		case 1:
		case 2:
		case 3:
		case 4:
			console.log('Пример 28: ', 'Товар заканчиваеться')
			break
		default:
			console.log('Пример 28: ', 'Товаров Достаточно')
	}
} else {
	console.log('Пример 28: ', 'товара нет в наличии')
}

// выше просто пример свича, который явно нам не подходит, ну что, тогда немного отрефракторим

count = NaN; // меняйте значения и обновляйте страницу

if (count > 0){
	if (count >= 5){
		console.log('Пример 29: ', 'Товаров Достаточно')
	} else if (count >= 1 && count <= 4) {
		console.log('Пример 29: ', 'Товар заканчиваеться')
	} else {
		console.log('Пример 29: ', 'Ой, что-то пошло не так, count = ' + count)  //эта строка обработает ошибки если мы вдруг что-то не так сделали
	}
} else {
	console.log('Пример 29: ', 'товара нет в наличии')
}

// после изуения кода выше возвращаемся за домашкой