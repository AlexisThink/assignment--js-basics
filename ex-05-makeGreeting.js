/**
 * makeGreeting()
 * ------------------------------------------------------
 * Write a function called makeGreeting() that accepts a string username
 * returns a string value that greets the user.
 *
 *
 **/


 // ++ YOUR Code below (write the 'makeGreeting' function): ++
function makeGreeting (name){
    var fullGreeting= "Hello " + name;
    return fullGreeting;
}











// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*


/*-------------------TEST-1-------------------------*/
// function receives input 'stringValue'
//   should return 'Hello stringValue' (with space character)
/*--------------------------------------------------*/
console.log("==== ex-05-makeGreeting : TEST 1 ====")

var funcOutput1 = makeGreeting("Atushi")
var funcOutput2 = makeGreeting("Mira")
var funcOutput3 = makeGreeting("Nico")

console.assert( funcOutput1 === "Hello Atushi" )
console.assert( funcOutput2 === "Hello Mira" )
console.assert( funcOutput3 === "Hello Nico" )

/*-------------------END-------------------------*/
console.log('\n\n');
