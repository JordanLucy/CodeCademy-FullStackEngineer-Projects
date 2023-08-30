const getSleepHours = (day) => {
  if (day === "monday") {
    return 8;
  }
  switch (day) {
    case "tuesday":
      return 7;
      break;
    case "wednesday":
      return 8;
      break;
    case "thursday":
      return 7;
      break;
    case "friday":
      return 7;
      break;
    case "saturday":
      return 9;
      break;
    case "sunday":
      return 9;
      break;
  }
};

//console.log(getSleepHours('sunday'));

const getActualSleepHours = () => 6 + 7 + 9 + 8 + 5 + 10 + 11;
// getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')

//console.log(getActualSleepHours());

const getIdealSleepHours = (idealHours) => idealHours * 7;
//console.log(getActualSleepHours());

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);
  if (actualSleepHours === idealSleepHours) {
    console.log("Wooo you got the perfect sleep.");
  }
  if (actualSleepHours > idealSleepHours) {
    console.log("You clearly had a big lie in, stop pressing snooze.");
  } else {
    console.log(
      "You need to get some more rest, you had " +
        (idealSleepHours - actualSleepHours) +
        " hour(s) less than you need."
    );
  }
};

calculateSleepDebt();
