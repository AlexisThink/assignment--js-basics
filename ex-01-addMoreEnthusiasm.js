/**
 * (DEMO) addMoreEnthusiam()
 * ------------------------------------------------------
 * Write a function called `addMoreEnthusiam` that takes a string as
 * input and appends three exclamation marks to the end of the string.
 *
 **/



// (DEMO) You, the student, will write the function

function addMoreEnthusiasm(message){
    return message + "!!!"
}


//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

/*-------------------TEST-1-------------------------*/
console.log(`==== ex-01-addMoreEnthusiam : TEST 1 ====`);

var output1 = addMoreEnthusiasm("I want pizza")
/**/console.assert( output1  === "I want pizza!!!" );

/*-------------------TEST-2-------------------------*/
console.log("==== ex-01-addMoreEnthusiam : TEST 2 ====");

var output2 = addMoreEnthusiasm("Hey")
/**/console.assert( output2 === "Hey!!!");

/*-------------------TEST-3-------------------------*/
console.log("==== ex-01-addMoreEnthusiam : TEST 3 ====");

var output3 = addMoreEnthusiasm("mother")
/**/console.assert( output3 === "mother!!!");

/*-------------------TEST-4-------------------------*/
console.log("==== ex-01-addMoreEnthusiam : TEST 4 ====");

var output4 = addMoreEnthusiasm("ouch")
/**/console.assert( output4 === "ouch!!!");

/*-------------------END-------------------------*/
console.log("\n\n")
