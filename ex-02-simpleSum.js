/**
 * simpleSum()
 * ------------------------------------------------------
 * Write a function called sum that takes two numbers as
 * inputs and computes the sum of those two numbers.
 *
 **/

function simpleSum(num1, num2){
  // ++ YOUR Code below: ++
   //  -- NOTE you will need to write the functions for
   //     the other ex-** problems in the problem set
   return num1+num2;
}

// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*


/*-------------------TEST-1-------------------------*/
//  function accepts two numbers as argument and
//    should return the sum total of the two numbers
/*--------------------------------------------------*/
console.log("==== ex-02-simpleSum : TEST 1 ====");

var returnedVal1 = simpleSum(8, 11)
console.assert( returnedVal1 === 19 );

var returnedVal2 = simpleSum(4, 101)
console.assert( returnedVal2 === 105 );

var returnedVal3 = simpleSum(2, 2)
console.assert( returnedVal3  !== 5 );

/*--------------------------------------------------*/
/*-------------------END----------------------------*/
console.log('\n\n');
