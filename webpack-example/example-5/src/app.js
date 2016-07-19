import 'babel-polyfill';
import cats from './cats';
import $ from 'jquery';

$('<h1>Cats</h1>').appendTo("body");


//const 声明一个只读的常量，一旦生成就不再更改
const ul  = $('<ul></ul>').appendTo("body");

for(const cat of cats){
	$('<li></li>').text(cat).appendTo(ul);
}

console.log("done")
