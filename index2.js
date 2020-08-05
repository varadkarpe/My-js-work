// // console.log("Hello, World")
// // console.log("Hello, World")
// // console.log("Hello, World")
// // alert('Hi')

// //Variables
// var a = "Varad";
// console.log(a);
// var num =45;
// console.log(num)

// //var entry = prompt('Enter a random value');
// // entry = entry * entry;
// // document.getElementById('h1').innerHTML = "Square of the given value is "+ entry;
// // document.getElementById('h2').innerHTML = "Does this work?" 


// //Numbers in JS
// var num1 = 5;
// var num2 = 2.2;
// console.log(num1);
// console.log(++num2);

// //Functions in JS
// function sqr(num1 , num2)
// {
//     return num1 * num2 ;
// }

// //Let's try function overloading
// function sqr(num1)
// {
//     return num1 * num1;
// }

// function sqr()
// {
//     return "There is no argument fot function to return a value for."
// }

// console.log(sqr(2,3));
// console.log(sqr(23));
// console.log(sqr());

// //This is a proof that it doesnt

// //Loops in js
// var bol = 0;
// while(bol < 300)
// {
//     console.log("Hi");
//     bol+=100;
// }

// for( i =0; i< 10; i++)
// {
//     console.log(i+10);
// }

// //Strings in JS
// var vegetable = 'Cauliflower';
// console.log(vegetable.length);
// console.log(vegetable.indexOf('l'));
// console.log(vegetable.slice(1,4));
// console.log(vegetable.replace('l','b'));
// vegetable = "Cabbage";
// var index = vegetable.indexOf('b');
// var veg = vegetable.slice(0,index);
// console.log(veg);
// vegetable = vegetable.slice(index , vegetable.length);
// console.log(vegetable);
// console.log(veg+ vegetable);
// vegetable = veg + vegetable;
// index = vegetable.indexOf('g');
// console.log(vegetable.charAt(index));
// var splitarr = vegetable.split('');
// console.log(splitarr);
// var splitarr2 = 'Cauliflower'.split('');
// console.log(splitarr2);
// splitarr = splitarr.concat(splitarr2);
// console.log(splitarr);

// //Arrays in JS
// let arr =  new Array('apple', 'banana','tomato', 'watermelon');
// console.log(arr);
// arr[1] = 'avocado';
// console.log(arr);
// console.log(arr.toString());
// console.log(arr);
// arr = arr.toString();
// console.log(arr);
// let arr2 = new Array('apple', 'banana','tomato', 'watermelon');
// console.log(arr2); 
// console.log(arr2,arr2.pop(),arr2);
// console.log(arr2.push('hi'),'Yeh dekho',arr2);
// arr2[arr2.length+1] = 'Bye';
// console.log(arr2);
// arr2[32] = 'Very random element';
// console.log(arr2.length);
// console.log(arr2);
// arr2.shift();  //Very expensive
// console.log(arr2);
// arr2.unshift("nokai");
// console.log(arr2)
// arr2.slice(arr2.indexOf("Bye"),32);   // Returns a new object
// console.log(arr2)
// console.log(arr2.splice(23,arr2.length));   //Removes the specified indexed elements and returns them as another array
// console.log(arr2)
// let nums = [5,4,3,2,1];
// console.log(nums.sort());   //Sorted for life
// console.log(nums)
// console.log(nums.sort(function(a,b){ return b-a}));  //In descending order , this is a kind of filter, we can pass anything
// console.log(nums.sort(function(a,b){ return a-b}));   // In ascending order
// let sum = 0;
// for(let i =0 ;i<nums.length;i++)
// {
//     sum+= nums[i];
// }
// console.log(sum)

// //Objects(Dictionary) in Javascript
// let Varad = "nothing"
// let student = {'Varad':'Karpe', Hi: 'okay', 'age': 22 , 'gender' :  'M' , 'Qualification': 'UG',
//     foc : function()
//     {
//         console.log(student['Varad'])
//         console.log(student.Hi)
//         console.log(student['age'])
//         console.log(student['gender'])        
//     }
// }

// student.foc()


// //Dealing with json
// //This section is present in the corresponding html file

// //If you want this file to run then uncomment the script tag from index2.html

var arr = [];
function countdown(n){
  if( n == 1)
  {
    return arr.push(1);
  }
  else if (n > 0)
  {
    arr.push(n);
    return countdown(n-1);
  }
  else
  {
    return arr;
  }
}
countdown(10);
console.log(arr);