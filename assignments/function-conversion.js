// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function() {
//   console.log("Function was invoked!");
// };
// myFunction();

// let myFunction = () => "Function was invoked!";
// console.log(myFunction());

// let anotherFunction = function(param) {
//   return param;
// };
// console.log(anotherFunction("Example"));

// let anotherFunction = param => param;
// console.log(anotherFunction("Example"));

// let add = function(param1, param2) {
//   return param1 + param2;
// };
// add(1, 2);

// console.log(add(1, 2));

// let add = (x, y) => {
//   return x + y;
// };

// console.log(add(1, 2));

// let subtract = function(param1, param2) {
//   return param1 - param2;
// };
// console.log(subtract(1, 2));

// let substract = (a, b) => {
//   return a - b;
// };

// console.log(substract(1, 2));

// Stretch

exampleArray = [1, 2, 3, 4];
// const triple = exampleArray.map(function(num) {
//   return num * 3;
// });
// console.log(triple);

let triple = exampleArray.map(num => {
  return num * 3;
});

console.log(triple);
