//Using const will keep the kelvin value at 293
const kelvin = 0;

console.log(kelvin);

//By Adding another const we can change the new value of kelvin to be stored in celsius

const celsius = kelvin - 273;
console.log(celsius);

//Change the value of celsius to replicate fahrenheit and be stored as a changable variable named fahrenheit//

let fahrenheit = celsius * (9 / 5) + 32;
console.log(fahrenheit);

//Round down the resulting number of the fahrenheit result. Save it as the new fahrenheit.

fahrenheit = Math.floor(fahrenheit);
console.log(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
