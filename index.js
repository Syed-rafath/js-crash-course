/**
 * formerly ECMAScript
 * initial version created in 10 days
 * const needs value assigned and 
 * cannot be changed dynamically
 * 
 * let is dynamic
 */

let a;
a=234324;
console.log(a);
const b=4;
console.log(b)
//b=3;
console.log(b)

/**
 * use camelCase 
 */
const ACCESS_KEY='23432234';

/**
 * data types
 * abc - string
 * 10 - number
 * true - boolean
 * undefined - undefined
 * null - object : inherently a primitive value
 * but declared object by the language design
 * 
 * meh its just a bug
 * null is 0x00 and object (type tag) 000
 * 
 * Brendan Eich said it was too late to fix the 
 * bug as it would affect projects worldwide
 * 
 * 
 * typeof _____
 */

console.log('concat')
console.log('abc' + 'de')
console.log('abc' + 5)
console.log('abc' + true)
console.log(9 + true) // true holds value 1
console.log(10 + false)

console.log(Date())

console.log(1===34);
/**
 * More generally, the operator returns the
 * value of the first falsy operand encountered
 * when evaluating from left to right, or the 
 * value of the last operand if they are all truthy.
 */
console.log(8 && ' ') // return 5 idk y
/**
 * falsy : 0 , false,'',null,undefined;
 * truthy: '0','false'
 * 
 * || -> or will return first truthy value
 *         or last falsy
 */

a=0;
console.log(a)
console.log(!a)
console.log(!!a)
 /**
  * short circuit evaluation in AND and OR
  * 
  * exp1  && exp2
  * 
  * exp2 wont be evaluated if exp1 if false
  */