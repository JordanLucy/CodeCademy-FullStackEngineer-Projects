var userName = "Jordan";

userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

const userQuestion = "Do you know the muffin man?";
console.log(`${userName}, ${userQuestion}`);

var randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";

eightBall = randomNumber;

switch (eightBall) {
  case 1:
    console.log("It is certain");
    break;
  case 2:
    console.log("It is decidely so");
    break;
  case 3:
    console.log("Reply hazy, try again");
    break;
  case 4:
    console.log("Cannot predict now");
    break;
  case 5:
    console.log("Do not count on it");
    break;
  case 6:
    console.log("My sources say no");
    break;
  case 7:
    console.log("Outlook not so good");
    break;
  case 8:
    console.log("Signs point to yes");
    break;
  default:
    console.log("It brokey wokey");
    break;
}

// var randomNumber = Math.floor(Math.random() * 8);
// let eightBall = '';

// eightBall = randomNumber;

// if (eightball === 1) {
//   console.log('It is certain');
// } else if (eightball === 2) {
//   console.log('It is decidely so');
// } else if (eightball === 3) {
//   console.log('Reply hazy, try again');
// } else if (eightball === 4) {
//   console.log('Cannot predict now');
// } else if (eightball === 5) {
//    console.log('Do not count on it');
// } else if (eightball === 6) {
//   console.log('My sources say no');
// } else if (eightball === 7) {
//   console.log('Outlook not so good');
// } else if (eightball === 8) {
//   console.log('Signs point to yes');
// } else {
//   console.log('2 litre machine broke');
// }
