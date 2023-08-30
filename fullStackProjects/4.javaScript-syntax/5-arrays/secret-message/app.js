let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];

secretMessage.pop();
// Task 1console.log(secretMessage);
// Task 2console.log(secretMessage.length);

secretMessage.push("wordOne", "wordTwo");
// Task 3 console.log(secretMessage);

secretMessage[7] = "right";
// Task 4 console.log(secretMessage);

secretMessage.shift();
// Task 5 console.log(secretMessage);

secretMessage.unshift("Programming");
// Task 6 console.log(secretMessage);

secretMessage.splice(6, 5, "know");
// Task 7 console.log(secretMessage);

//Task 8
console.log(secretMessage.join(" "));
