JavaScript


Task 1. 

Write implementation of function createAdd(). This function should be used as following:
var addTen = createAdd(10);
console.log(addTen(10));   // outputs 20
console.log(addTen(5));   // outputs 15

// Рішення

var addTen = createAdd(10);
function createAdd(numberTen) {
  return (num) => numberTen + num;
}

console.log(addTen(10));
console.log(addTen(5));



Task 2. 

Write a function that will receive an input array of integers and return array of squares of input:
Input [1, 2, 3] should be converted to [1, 4, 9]

// Рішення

function squareFunc() {
  const array = [1,2,3];
  let newSquareArray = array.map((number) => number * number);
  return newSquareArray;
}
console.log(squareFunc());



Task 3. 

Write a function that will receive an array of integers and return its product using Array.reduce


// Рішення

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArray = array.reduce((result, item) => {
  return result + item;
}, 0 );
console.log(newArray);






