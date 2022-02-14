// alert("My name is Jayven");

// console.log("My name is Jayven");  sends your message to the console window of your web server

// This is a comment

/* 

This is a multi-line
comment
and won't end until

*/

/* VARIABLES
var x = 420; // var declares the variable, follow var with the word/letter/number that you want the variable set to

var firstName = "Jayven"; // camelcase, capitlize every beginning letter after first word. i.e. myCoolVariable
var online = true;
var whatever = null;
var lastName = "Couch";
var fullName = firstName+" "+lastName

console.log("My name is " + fullName);
console.log("My favorite number is " + x);
console.log("Are you online? ",online);
console.log(whatever);

const pi = 3.14159;

pi = 4

console.log(pi) // would get an error stating that pi is assigned to a constant value
*/

// ARITHMETIC EXPRESSION 
// is some combination of operands (values, variables, etc.) operators (+ - * / %) that can be evaluated to a value

//var friends = 10;

//friends = friends + 1; addition
//friends = friends - 1; subtraction
//friends = friends * 2; multiplication
//friends = friends / 2; division
//friends = friends ** 2; power to 2
//var remainingFriends = friends % 3;

//friends += 1; shortcuts
//friends -+ 1;
//friends *= 2;
//friends /= 2;
//friends **= 2;
//friends %= 3;


//console.log(friends)

// OPERATOR PRECEDENCE
// 1. parenthesis () 2. exponents 3. multiplication and division 4. addition and subtraction

//friends = 10 + 2 / 2;

//console.log(friends)

// USER INPUT

// var myName = window.prompt("What is your name?: ")
// console.log("Hello ",myName);

// document.getElementById("myButton").onclick = function(){

   // var myName = document.getElementById("myText").value;
    // console.log("Hello",myName);
// } 

// TYPE CONVERSION

//var age = window.prompt("Enter your age");

//console.log("Happy Birthday");

//age = Number(age);

//age += 1;

//console.log(typeof age);
//console.log(age);

// FUNCTIONS

/*function sayHello(name, age){
    console.log("Hello",name);
    console.log("You are",age+" years old")
    console.log("Have a nice day!");
    console.log("Goodbye");
};

var myName = "Jayven";
sayHello("Jayven", 22);

function toCelsius(f){
    return (f-32) * (5/9);
}

function toFarenheit(c){
    return (c * 9/5) + 32;
}

var myTempInF = toFarenheit(37.7)
var myTempInC = toCelsius(100)

console.log(myTempInF)
console.log(myTempInC)
*/

/* OBJECTS

var human = {
    name: "Caleb",
    age: 22,

    eat : function(){
        console.log("Caleb is eating my balls")
    },

    drink : function(){
        console.log("Caleb is drinking Matt's semen")
    },

    sleep : function(){
        console.log("Caleb has passed out and that is good news")
    }
};

human.name // dot notation
human['name'] // bracket notation

console.log(human.name);
console.log(human.age);

human.drink();
human.sleep();
human.eat();
*/

/* IF STATEMENTS


var age = window.prompt("What is your age?: ")

if(age >= 65){
    console.log("You have been voting for a while!")
}
else if(age >=18){
    console.log("You are eligible to vote")
}
else if(age < 0){
    console.log("You have yet to be born")
}
else {
    console.log("You are too young to vote")
}
*/

/* SWITCH STATEMENTS

var grade = window.prompt("What was your letter grade on your exam?: ")
testGrade = grade.toUpperCase()

switch (testGrade){
    case "A":
        console.log("You did great!");
        break;
    case "B":
        console.log("You did well");
        break;
    case "C":
        console.log("You did alright");
        break;
    case "D":
        console.log("You did not do too well");
        break;
    case "F":
        console.log("You failed!")
        break;
    default:
        console.log(testGrade,"is not a valid letter grade");
}
*/

// LOGICAL OPERATORS
// && and (checks if both conditions are true)
// || or (checkls if at least 1 of conditions are true)
// !  not (reverses boolean value)

/* var temperature = 15; // celsius

if(temperature > 30){
    console.log("It is hot outside")
}
else if(temperature > 0 && temperature <= 30){
    console.log("It is warm outside")
}
else{
    console.log("It is cold outside")
}
*/
// WHILE LOOPS

/* var creditNum = window.prompt("Your computer has a virus! Enter your credit card info to get rid of it!")

while(creditNum == ""){
    creditNum = window.prompt("Your computer has a virus! Enter your credit card info to get rid of it!")
}

console.log("Thank you! You no longer have a virus!")
*/
/*do {

var creditNum = window.prompt("Your computer has a virus! Enter your credit card info to get rid of it!")

}while(creditNum == "")
*/

// FOR LOOPS declare (index; condition; step)

/* for(let i = 0; i < 10; i+=1){ //similar to C
    console.log(i);
} */

//happy new year countdown

/* for(let i = 10; i > 0; i--){
    console.log(i)
}
console.log("HAPPY NEW YEAR")
*/

// FOR IN LOOPS

/*let letters = ["H","E","L","P"];

let Car = {
    make:"Ford",
    model:"F150",
    year:2010,
    color:"black"
}

//for(let i in letters){
    //console.log(letters[i]);
//}

for(let property in Car){
    console.log(Car[property])
}
*/

// NESTED LOOPS
/*
var symbol = window.prompt("What symbol would you like to use?: ");
var rows = window.prompt("How many rows?: ");
var columns = window.prompt("How many columns?: ");

for(let i = 0; i < rows; i++){
    for(let j = 0; j < columns; j++){

    document.getElementById("myRectangle").innerHTML += symbol
    }
document.getElementById("myRectangle").innerHTML += "<br>";
}
*/

// STRING METHODS

/* var myName = "Jayven Couch";

console.log(myName.length);
console.log(myName.charAt(0));
console.log(myName.indexOf("a"));
console.log(myName.lastIndexOf("e"));
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

//var firstName = myName.slice(0, 5);
var firstName = myName.slice(0, myName.indexOf(" "));
var lastName = myName.slice(myName.lastIndexOf(" ") + 1);
console.log(firstName);
console.log(lastName);
*/

// BREAK AND CONTINUE
 /*
for(let i = 1; i <= 20; i++){

    if(i == 13){
        break; // breaks entire iteration
    }
    console.log(i);
}

for(let i = 1; i <= 20; i++){

    if(i == 13){
        continue; //skips over current iteration(i.e 13)
    }
    console.log(i);
}
*/

// forEach() = Performs a function for each element in an array
/*
let total = 0;
let cart = [5, 6, 7, 8, 9];

function checkOut(element){

    total += element;
}

cart.forEach(checkOut);

console.log("Your total is: $"+total);
*/

// MAP METHOD

// map() = Performs a function for each element in an array, 
// then stores the returns values in a new array

/* let storeUSD = [5, 6, 7, 8, 9];

function toEuros(value){

    value *= 0.85;
    return value;
}

let storeEUR = storeUSD.map(toEuros);

console.log(storeEUR);
*/ 

// CLOSURE EXAMPLE W/ ARGUMENTS
/*
function makeSize(size){

    return function(){

        document.body.style.fontSize = size + "px";
    }
}

function makeFont(font){

    return function(){

        document.body.style.fontFamily = font;
    }
}

let size20 = makeSize(20);
let size30 = makeSize(30);
let size40 = makeSize(40);

let fontInkFree = makeFont("Ink Free");

size20();
size30();
//size40();

fontInkFree();
*/
 // ARROW FUNCTIONS
 // shortcut for a function expression
/*
 let hello;

 //function expression

 hello = function(x){
    return "Hello, World";
 }
console.log(hello());

//arrow function

hello = () => "Hello, World";
console.log(hello());
*/

// CONSTRUCTOR
// special method for assigning properties
// this = A reference to the object that we are currently working with
/*
class Car{

    constructor(make, model, year, color){
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    drive(){
        console.log("You drive the car");
    }
    brake(){
        console.log("You step on the brakes");
    }

}

let car1 = new Car("Ford", "Mustang", 2022, "Black")
let car2 = new Car("Chevy", "Camaro", 2014, "Yellow")

console.log(car2.make);
console.log(car1.model);
*/

// INHERITANCE
/*
class Animal{

        constructor(){
            this.alive = true;
        }
        eat(){
            console.log("This animal is eating")
        }
}

class Rabbit extends Animal{

}

class Fish extends Animal{

}

class Hawk extends Animal{

}

let rabbit = new Rabbit();
let fish = new Fish();
let hawk = new Hawk();

console.log(rabbit.alive);
fish.eat();

*/

// METHOD OVERRIDING
// a child class will use methods with the same name that are more closely associated with it
/*
class Vehicle{

    drive(){
        console.log("You drive the vehicle")
    }
}

class Car extends Vehicle{

    drive(){
        console.log("You drive the car")
    }

}
class RaceCar extends Vehicle{

    drive(){
        console.log("You drive the racecar!!!!")
    }
}

let car = new Car();
let raceCar = new RaceCar();

car.drive();
raceCar.drive();

*/

// CREATING HTML ELEMENTS









