// console.log("Hello, World")
// console.log("Hello, World")
// console.log("Hello, World")
// alert('Hi')

//Variables
var a = "Varad";
console.log(a);
var num =45;
console.log(num)

//var entry = prompt('Enter a random value');
// entry = entry * entry;
// document.getElementById('h1').innerHTML = "Square of the given value is "+ entry;
// document.getElementById('h2').innerHTML = "Does this work?" 


//Numbers in JS
var num1 = 5;
var num2 = 2.2;
console.log(num1);
console.log(++num2);

//Functions in JS
function sqr(num1 , num2)
{
    return num1 * num2 ;
}

//Let's try function overloading
function sqr(num1)
{
    return num1 * num1;
}

function sqr()
{
    return "There is no argument fot function to return a value for."
}

console.log(sqr(2,3));
console.log(sqr(23));
console.log(sqr());

//This is a proof that it doesnt

//Loops in js
var bol = 0;
while(bol < 300)
{
    console.log("Hi");
    bol+=100;
}

for( i =0; i< 10; i++)
{
    console.log(i+10);
}

//Strings in JS
var vegetable = 'Cauliflower';
console.log(vegetable.length);
console.log(vegetable.indexOf('l'));
console.log(vegetable.slice(1,4));
console.log(vegetable.replace('l','b'));
vegetable = "Cabbage";
var index = vegetable.indexOf('b');
var veg = vegetable.slice(0,index);
console.log(veg);
vegetable = vegetable.slice(index , vegetable.length);
console.log(vegetable);
console.log(veg+ vegetable);
vegetable = veg + vegetable;
index = vegetable.indexOf('g');
console.log(vegetable.charAt(index));
var splitarr = vegetable.split('');
console.log(splitarr);
var splitarr2 = 'Cauliflower'.split('');
console.log(splitarr2);
splitarr = splitarr.concat(splitarr2);
console.log(splitarr);

//Arrays in JS
let arr = new Array('apple', 'banana','tomato', 'watermelon');
console.log(arr);
arr[1] = 'avocado';
console.log(arr);
console.log(arr.toString());
console.log(arr);
arr = arr.toString();
console.log(arr);
let arr2 = new Array(arr);
console.log(arr2);