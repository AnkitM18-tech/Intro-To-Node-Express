const num1 = 5;
const num2 = 10;

function addValues() {
  console.log(`the sum is : ${num1 + num2}`);
}

addValues();
// If there is a function call in the module that we invoke, then when we add that in another file it gets executed.(require),When NodeJS exports it wraps it in the function,so when you use require you invoke the code if you have some kind of function that is executed here.
