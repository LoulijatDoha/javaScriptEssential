// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";

function show() {
    var functionVar = "I'm a function-scoped var";
    let functionLet = "I'm a function-scoped let";
    const functionConst = "I'm a function-scoped const";

    // You can log these inside the function, as they are accessible here.
    console.log(functionVar);  // Outputs: I'm a function-scoped var
    console.log(functionLet);  // Outputs: I'm a function-scoped let
    console.log(functionConst);  // Outputs: I'm a function-scoped const
}
show();

// Now you can log global variables outside the function
console.log(globalVar);  // Outputs: I'm a global variable
console.log(globalLet);  // Outputs: I'm also global, but scoped with let
console.log(globalConst);  // Outputs: I'm a global constant

// Attempting to log function-scoped variables outside their scope will result in ReferenceError
// console.log(functionVar);  // Uncaught ReferenceError: functionVar is not defined
// console.log(functionLet);  // Uncaught ReferenceError: functionLet is not defined
// console.log(functionConst);  // Uncaught ReferenceError: functionConst is not defined
