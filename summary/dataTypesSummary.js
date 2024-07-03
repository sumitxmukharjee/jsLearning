// Primitive Data Types

// These are call by value data which means the original value is copied

//  7 Categories or Types : String, Number, Boolean, null, undefined. Symbol,
//  BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail; //undefined

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id, " ", anotherId);
console.log(id === anotherId);

const bigNumber = 736276462372348234672386427342364n;

// Reference Type( Non Primitive)

// Where as these are call by reference which means not the value
// but the reference is passed to the users.

// Arrays, Objects, Functions,

const heroes = ["Iron Man", "Dr Strange", "Steve Rogers"];

// inside curley bracket means object and square bracket is Array
let myObj = {
  name: "Stephen Strange",
  age: 22,
};

const myFunction = function () {
  console.log("Hello World");
};

myFunction(); //calling function

console.log(typeof myFunction); // return type function
console.log(typeof myObj); // return type object
console.log(typeof heroes); // return type object
console.log(typeof bigNumber); // return type object

// *******************************************

// Memories

// Stack Memories(Stack Memories), heap Memories(Non primitive

// Stack memoru - When you define a memory it brings you a copy
// Heap memory - When we define anything or change anything, it;s changed in heap)

//  It goes to stack
let myYoutTubeName = "Super Super";

let anotherName = myYoutTubeName;
anotherName = "Super Filmy";

console.log(myYoutTubeName); //stack - original won;t change
console.log(anotherName);

let userOne = {
  email: "user@google.com",
  upi: "sumit@oksbi",
};

let userTwo = userOne;

userTwo.email = "user@yahoo.com"

console.log(userOne.email)
console.log(userTwo.email)
