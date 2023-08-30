let raceNumber = Math.floor(Math.random() * 1000);

//Enter different combinations to check that the two variables run right with the right outcomes

const registeredEarly = true;
const runnerAge = 18;

if (registeredEarly && runnerAge > 18) {
  raceNumber += 1000;
}

if (registeredEarly && runnerAge > 18) {
  console.log(`You will race at 9:30am, your race number is ${raceNumber}.`);
} else if (!registeredEarly && runnerAge > 18) {
  console.log(`Late adults run at 11:00am, your race number is ${raceNumber}.`);
} else if (runnerAge < 18) {
  console.log(
    `Your race will start at 12:30pm, your race number is ${raceNumber}.`
  );
} else {
  console.log(
    `If you are exactly 18 years old, please see the registration desk.`
  );
}
