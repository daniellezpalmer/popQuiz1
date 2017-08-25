console.log('quiz 1');

function begin() {
	console.log("begin");
}
begin();

function echo(value) {
  return value;
}
// console.log(echo('hello'));
echo('hello');

function math(x,y,z) {
  return (x+y)*z;
}
// console.log(math(3,4,2));
math(3,4,2);


function toString(array){
	let string = '';
	for (let i = 0; i < array.length; i++) {
		string += array[i] + ' ';
	}
  return string;
}
// console.log(toString(['now','is','the','time']))
toString(['now','is','the','time']);


function callMe(callback) {
	console.log('in first function');
	callback();
}
callMe(function () {
	console.log('in second function');
});

function callMe2(callback, string) {
	console.log('in first function');
	callback(string);
}
callMe2(function (string) {
	console.log('in second function');
	console.log(string);
}, 'hello');

function reverse(string){
  let reverse = '';
	for (var i = string.length-1; i >= 0; i--) {
		reverse += string.charAt(i);
	}
	return reverse;
}
console.log(reverse('the iron yard'));

function sleep(){
  console.log("before sleep loop", Date.now());
  setTimeout(function(){
		console.log("after sleep loop", Date.now());
	}, 1000)
}
sleep();
