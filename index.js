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

//console.log(date) //error out of scope

//assigning default parameter

//IIFE - immediately invoked function expression
(() => console.log('IIFE'))()
//arrow fucntion syntax
const fn1 = () =>{
    console.log("fn1")
    console.log(12342987520934578)
}

fn1()
                //implicit return
const fn2 = (a) => a;
console.log(fn2(67))

//multiple paramentereresrasdfjghasdf
const fnpara= (para1,para2) => {
    console.log(para1)
    return para2
}   ;

console.log(fnpara(3,"asd"))

//callback functins
setTimeout(() => console.log("expersion to bet ex3ecutes"),3000)

//methods in a function
const math={
    sum:(a,b) => a+b//; this is a dict so adding ';' will result in an error
    //properties
    ,pi:3.14
};
console.log(math.sum(4,5))
console.log(math.pi)

//extracting values withotu index
//destucturing arrays
const [a1,a2]=arr;
console.log(a1,a2);

//object destructring
const myComputer={
    type:'latpop',
    randomAccesMemory: 67
}
//key names should be same else error
//bread taste better than key
//const{type,ram}=myComputer;
//console.log(ram,type);
//cannont store more than once
const{type,randomAccessMemory}=myComputer;
console.log(randomAccessMemory,type);

//Object destructuring of the function parameters
/**
 * so wtf
 * 
 * when dealing with methods we have to maintain order of parameter
 * but using object destructuring we
 * can avoid
 * that
 */

const computerInfo= (type,ram) =>{
    console.log('type:'+type+' ram:'+ram)  
};
computerInfo('pc',76);

//seperate order in input para but output is as
//planned
const computerInfo1= ({ram,type}) =>{
    //const{type,ram}=computer
    console.log('type:'+type+' ram:'+ram) 
    return [type,ram] 
};
const myLaptop={
    type:'pc',
    ram:775
};
console.log(computerInfo1(myLaptop));

//string literal
const type1= 'tablet';
const ram1=9;
const info=`Type: ${type1} Ram:${ram1}`;
console.log(`Type: ${type1} Ram:${ram1}`)
console.log(info)


//if else statement
if (10>2) console.log('truthy')

if (10>2) 
    console.log('truthy')

if (10<2){
    console.log('truthy');//u r allowed to ';'
} else{
    console.log('false');
}
//let temp=if (10>2) console.log('truthy') -wrong

trial