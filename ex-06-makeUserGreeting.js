/**
 * makeUserGreeting()
 * ------------------------------------------------------
 * Write a function called makeUserGreeting() that takes
 * (1) a string and (2) a boolean as arguments.
 *
 * The string-argument will be a username and the boolean-argument
 * will signify a true/false value for a returning customer.
 *
 * If the 2nd input is the boolean value `true`,
 * then the function should return a 'Good to see you again, «username».' greeting
 *    Ex: makeUserGreeting('Janet', true) //=> "Good to see you again, Janet."
 *
 * If the 2nd input is the boolean value `false`,
 * then the function should return a 'Welcome, «username»!' greeting
 *    Ex: makeUserGreeting('Janet', false) //=> "Welcome, Janet!"
 *
 * NOTE: Don't forget the comma and space and ending puctuation when building the string.
 **/


// ++ YOUR Code below (write the 'makeGreeting' function): ++


function makeUserGreeting (name, value){
    if (value === true){
        return "Good to see you again, " + name +  ".";
    } else {
        return "Welcome, " + name + "!";
    }
}



// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*


 /*-------------------TEST-1-------------------------*/
 // function string-input 'Atushi' and boolean-input `true`
 //   should return string: 'Good to see you again, «string-input».'
 /*--------------------------------------------------*/
 console.log("==== ex-06-makeUserGreeting : TEST 1 ====");


var funcOutput1 = makeUserGreeting("Atushi", true)
var funcOutput2 = makeUserGreeting("Mira", true)
var funcOutput3 = makeUserGreeting("Nico", true)

console.assert( funcOutput1 === "Good to see you again, Atushi." )
console.assert( funcOutput2 === "Good to see you again, Mira." )
console.assert( funcOutput3 === "Good to see you again, Nico." )

console.assert( funcOutput3 !== "Welcome, Nico!");


/*-------------------TEST-2-------------------------*/
// function receives string-input 'Atushi' and boolean-input `false`
//   should return string: 'Welcome, «string-input»!'
/*--------------------------------------------------*/
console.log("==== ex-06-makeUserGreeting : TEST 2 ====");


var funcOutput4 = makeUserGreeting("Atushi", false)
var funcOutput5 = makeUserGreeting("Nico", false)
var funcOutput6 = makeUserGreeting("Mira", false)

console.assert( funcOutput4 === "Welcome, Atushi!");
console.assert( funcOutput5 === "Welcome, Nico!");
console.assert( funcOutput6 === "Welcome, Mira!");

console.assert( funcOutput6 !== "Good to see you again, Mira.");

/*-------------------END-------------------------*/
console.log('\n\n');
