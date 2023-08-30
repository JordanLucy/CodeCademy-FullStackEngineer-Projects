const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
  constructor(field = [[]]) {
    this.field = field;
    this.locationX = 0;
    this.locationY = 0;
    this.field[0][0] = pathCharacter;
  }

  runGame() {
    let playing = true;
    while (playing) {
      this.print();
      this.askForUserInput();
      if (!this.isInBounds()) {
        console.log("Out of bounds!");
        playing = false;
        break;
      } else if (this.isHole()) {
        console.log("Unlucky, you fell down a hole!");
        playing = false;
        break;
      } else if (this.isHat()) {
        console.log("Congratulations! You found the hat!");
        playing = false;
        break;
      }
      this.field[this.locationY][this.locationX] = pathCharacter;
    }
  }

  askForUserInput() {
    const answer = prompt(
      "Please enter which way you want to go (U for up, D for down, L for left, R for right): "
    ).toUpperCase();

    switch (answer) {
      case "U":
        this.locationY -= 1;
        break;
      case "D":
        this.locationY += 1;
        break;
      case "L":
        this.locationX -= 1;
        break;
      case "R":
        this.locationX += 1;
        break;
      default:
        console.log("Please enter either U, D, L, R.");
        this.askForUserInput();
        break;
    }
  }

  isInBounds() {
    return (
      this.locationY >= 0 &&
      this.locationX >= 0 &&
      this.locationY < this.field.length &&
      this.locationX < this.field[0].length
    );
  }

  isHat() {
    return this.field[this.locationY][this.locationX] === hat;
  }

  isHole() {
    return this.field[this.locationY][this.locationX] === hole;
  }

  print() {
    const boardAsString = this.field
      .map((row) => {
        return row.join("");
      })
      .join("\n");
    console.log(boardAsString);
  }

  static generateField(height, width, percentage = 0.1) {
    const field = new Array(height).fill(0).map((el) => new Array(width));

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const rand = Math.random();

        field[y][x] = rand > percentage ? fieldCharacter : hole;
      }
    }
    const hatLocation = {
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height),
    };

    while (hatLocation.x === 0 && hatLocation.y === 0) {
      hatLocation.x = Math.floor(Math.random() * width);
      hatLocation.y = Math.floor(Math.random() * height);
    }
    field[hatLocation.x][hatLocation.y] = hat;
    return field;
  }
}

const myfield = new Field(Field.generateField(10, 10, 0.2));
myfield.runGame();
