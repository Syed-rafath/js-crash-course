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

 //ternary operator(experession)
 const res= 4>3
    ?true
    :false;

/**
 * Object creation
 * convention-> spilling in lines
 */
const player = {
    name:"rafath",
    online: false
};

/**
 * player here is just a pointer
 * since the object is a referenc type we are 
 * able to modify it using the pointer
 * even tho its a 'const' type
 */
console.log(player)
console.log(player.name)
console.log(player["name"])

player.level=19;
console.log(player.level);

delete player.level;
console.log(player.level);

//using variable instead of keyname
let field='clanName';
player[field]="Akatsuki"

//printing objectkeys
console.log(Object.keys(player))
console.log(Object.values(player))

//arrays are dynamic too can hold anything
const arr=['player',3,'lionheart']
console.log(arr)
console.log(Object.keys(arr))
console.log(Object.values(arr))

//inserting into arrays leaves spaces in between
console.log(arr[2])
arr[3]='ayaka'
console.log(arr[3])
arr[10]='assassin'
console.log(arr)
//pushing elements to the end
arr.push('help')
console.log(arr)


//creating functin
function fn(){
    console.log("inside the function")
}

fn();


//function scope
function fn() {
    const date=Date()
    return 10;
}

console.log(date) //error out of scope

//assigning default parameter

//