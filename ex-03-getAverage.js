/**
 * getAverage()
 * ------------------------------------------------------
 * Write a function called getAverage that takes two numbers
 * as inputs and returns the average of the two. To avoid
 * repeating yourself, use your sum function inside
 * of your average function.
 *
 **/


 // ++ YOUR Code below (write the 'getAverage' function): ++


function getAverage(num1, num2){
    var operation = (num1+num2)/2;
    return operation;    
}











// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*


/*-------------------TEST-1-------------------------*/
//  function accepts two numbers as argument and
//    should return the average of the two numbers
/*--------------------------------------------------*/

console.log("==== ex-03-getAverage : TEST 1 ====");

console.assert( getAverage(5,15) === 10 )
console.assert( getAverage(18,22) === 20 )
console.assert( getAverage(100,200) === 150 )
console.assert( getAverage(-12,12) === 0 )
console.assert( getAverage(-20,-10) === -15 )
console.assert( getAverage(0,-10) === -5 )


/*------------------------------------------------*/
/*-------------------END-------------------------*/
console.log('\n\n');
