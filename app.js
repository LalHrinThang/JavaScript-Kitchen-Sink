// create a variable that contains your name as a value.

var userName = "Lal Hrin Thang";
    console.log(userName);

// Create a constant that contains the number of states in the U.S.
// and name it appropriately

const statesofUSA = 50;

/* Compute the result of adding 5 and 4 and 
store it in an appropriately named variable. */
var addedStates = statesofUSA + 5 + 4;

console.log(addedStates);


function sayHello() {
    console.log("Hello World!")
}

// console.log(alert("Hello World!"));


// a function called checkAge that takes two arguments:
//  one for a name and one for an age.
//  If the age is less than 21, display an alert that says, 
// "Sorry " + name + ", you aren't old enough to view this page!"
function checkAge (person,age) {
    if (age < 21) {
        return console.log("Sorry " + person + ", you aren't old enough to view this page!")
    }
    else {
        console.log("Welcome!")
    }
}
checkAge("Charles",21);
checkAge("Abby",27);
checkAge("James",18);
checkAge("John",17);


let favVegetable = ["apple","mango","watermelon","pineapple"];

for (let x of favVegetable) {
    console.log(x);
}

let pet = {
    name : ["Jacky","Kittie"],
    breed : ["dog","cat"]
};

console.log(pet.name[0] + " " + pet.breed[0])
console.log(pet.name[1] + " " + pet.breed[1])


let listofName = [
    {
        person: "Ben",
        age:20
    },
    {
        person: "Van",
        age:22
    },
    {
        person: "Jacob",
        age: 20
    },
    {
        person: "Thomas",
        age: 24
    },
    {
        person: "Esther",
        age: 19
    }
];

for(let y=0; y < listofName.length; y++){
    checkAge(listofName[y].person,listofName[y].age)
}


function getLength(char){
    return char.length
}

let evenOrodd = getLength("HelloWorld!")

if (evenOrodd % 2 === 0) {
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place!");
}