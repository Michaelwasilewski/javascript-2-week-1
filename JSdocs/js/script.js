console.log("hello neo");


/** 
 * This function adds two numbers together
 *  */ 

function addNumbers(a, b){
    return a + b;
}

addNumbers();

/**
 * Display a message to the user
 */
function greetingUser() {
    return `<span> Hello my friendly user</span>`;
}
greetingUser();
// /**
//  * Adds two numbers together
//  * @param {number} a First value
//  * @param {number} b Second value
//  */
//  export function addNumbers(a, b) {
//     return a + b;
// }


/** 
 * Adds three numbers togheter
 * @param {number} a First falue
 * @param {number} b Second value
 * @param {number} c Thrid Value
 * @returns {number} Sum of params
 *  **/

function addThreeNumbers(a, b, c){
    return a + b + c;
}
addThreeNumbers(10, 20, 90);
// /** 
//  * @return {dataType} returnDescription
//  * **/

/** 
 * Display Cat names
 * @param {string} cat1 First Value
 * @param {string} cat2 Second Value
 * @param {string} cat3 Third Value
 * @param {string} cat4 Fourth Value
 * @returns {string} List of cat names
 * **/
function addFourCats (cat1, cat2, cat3, cat4) {
    return `
    <ul>
        <li>${cat1}</li>
        <li>${cat2}</li>
        <li>${cat3}</li>
        <li>${cat4}</li>      
    </ul>`
}
addFourCats("Georg", "Sander" , "Sandra", "Emil");

// example 5 - @example

/** 
 * 
 * **/
```js
cosole.log("Hello world"); ```


/** 
 * Adds four numbers togheter
 * @param {number} a First falue
 * @param {number} b Second value
 * @param {number} c Thrid Value
 * @param {number} d Fourth Value
 * @returns {number} Sum of params
 * @example 
 * ```js
 * // add four numbers together
 * const a = 10;
 * const b = 20;
 * const c = 90;
 * const d = 20;
 * const sum = addFourNumbers(a, b, c, d);
 * // expect sum to be 150
 * ```
 *  **/

 function addFourNumbers(a, b, c, d){
    return a + b + c + d;
}
addFourNumbers(10, 20, 90, 20);

// optional parameters 

// /** 
//  * @param {dataType} [optionalParamName] OptionalParamNameDescription
//  * **/


/** 
 * Mulitply Two numbers together
 * @param {number} a First Value
 * @param {number} [b] Second Value
 * @return {number} Multiplication of numbers
 * 
 * **/
function BigBrainTime(a,b = 10) {
    return a * b;
}
BigBrainTime(1, 70);

/** 
 * Adds Two Digits
 * @typeof {(number|string)} NumberLike
 * **/
function addTwoDigits (a, b){
return a + b;
}
addTwoDigits();


// complex objects 

// Example 8 


/** 
 * @param {{name: string, role: string}} my logged in user object
 * **/
function handleUserLogin({name, role}){
    loginUserWithToken();
}

function loginUserWithToken(){

}
handleUserLogin();