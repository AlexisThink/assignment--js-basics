/**
 * isNegative()
 * ------------------------------------------------------
 * Write a function called isNegative that returns true/false for
 * whether a number is negative or not.
 *
 **/


 // ++ YOUR Code below (write the 'isNegative' function): ++

function isNegative(number){
    if (number >= 0){
        return false;
    } else{
        return true;
    }
}













// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*


/*-------------------TEST-1-------------------------*/
// function receives positive number value as input
//   and should return `false` boolean val
/*--------------------------------------------------*/
console.log("==== ex-04-isNegative : TEST 1 ====");

console.assert( isNegative(14) === false )
console.assert( isNegative(2) === false )


/*-------------------TEST-2-------------------------*/
// function receives number value of zero as input
//    and should return false` boolean val
/*--------------------------------------------------*/
console.log("==== ex-04-isNegative : TEST 2 ====");

console.assert( isNegative(0) === false )


/*-------------------TEST-3-------------------------*/
// function receives negative number value as input
//   and should return `true` boolean val
/*--------------------------------------------------*/
console.log("==== ex-04-isNegative : TEST 3 ====");

console.assert( isNegative(-1) === true )
console.assert( isNegative(-64) === true )

/*-------------------END-------------------------*/
console.log('\n\n');
