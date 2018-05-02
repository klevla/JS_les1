//Строки. Задачи
let str = 'some test string';
let a = 20;
let b = 16;
let value;
let string;

value = str[0] + str[str.length-1];
value = str[0].toUpperCase() + str[str.length-1].toUpperCase();
value = str.indexOf('string');
value = str.indexOf(' ');
//сначала определила где первый пробел, зная его индекс, ищу второй
value = str.indexOf(' ', 5);
value = str.substr(5, 4);
value = str.substring(5, 10);
value = str.slice('', -6);
string = a.toString() + b;

console.log(value, string);


//Числа. Задачи.

let res;
res = (Math.PI).toFixed(2);
res = Math.max(15, 11, 16, 12, 51, 12, 13,51);
res = Math.random().toFixed(2);
res = Math.round(Math.random() * 100);
res = (0.7 + 0.6).toFixed(1);
res = parseFloat("100$");

console.log (res);


//Объект.Задачи

let sample = {
    product:'iphone',
    price: res,
    currency: 'dollar'
};
sample.details = {
    model: '5s',
    color: 'red'
};
console.log (sample);