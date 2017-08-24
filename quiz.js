console.log('quiz 1');

function begin() {
	console.log("begin");
}
begin();

function echo() {
  return 'hello';
}
echo();

function math(x,y,z) {
  return (x+y)*z;
}
math(3,4,2);

function toString(){
  return ['now','is','the','time'];
}
toString();

function callme (function(){
  console.log("In the first function")
}){
  console.log("In the second function")
}
callme();

function callme2 (function(){
  console.log("In the first function")
}){
  console.log("In the second function")
};

function reverse("hello"){
  return "olleh"
}
reverse();

function sleep(){
  console.log("before I sleep");
  Date.now();
  console.log("after I sleep");
}
sleep();
