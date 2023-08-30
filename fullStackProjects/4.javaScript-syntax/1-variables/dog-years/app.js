//This is my age and const keeps the variable from being changed
const myAge = 24;

//Let will allow this variable to be changed

let earlyYears = 2;

earlyYears *= 10.5;
console.log(earlyYears);

//Assigning a new variable for the myAge but with 2 years taken off it.

let laterYears = myAge - 2;

//Multiplying the value to calculate the number of dog years.

laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);

//Adding a new variable which adds both early and later years together.

const myAgeInDogYears = earlyYears + laterYears;
console.log(myAgeInDogYears);

//Writing my name as a string with a built-in method of .toLowerCase() stored in myName.

var myName = "Jordan".toLowerCase();

console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
