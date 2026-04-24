// *** Ignore the following lines ***
import chalk from "chalk";
import prompt from "prompt-sync";
// *** Ignore the above lines ***

// Use the following function to read input from the user:
const readLine = prompt({ sigint: true });

function runExerciseOne() {
  const firstName = "Sebastian";
  const lastName = "Vallin";
  console.log(
    `Hello ${firstName} ${lastName}! I'm glad to inform you that you are the test subject for my first assignment!`,
  );
}

// ------------------------------------------ Exercise 2
function runExerciseTwo() {
  const firstName: string = readLine(`Please enter your first name: `);
  const lastName: string = readLine(`Please enter your last name: `);
  console.log(`Hello ${firstName} ${lastName}! Have a nice day!`);
}

// ------------------------------------------ Exercise 3
function runExerciseThree() {
  // A
  const num1: number = Number(readLine(`Enter a number: `));
  const num2: number = Number(readLine(`Enter a second number: `));

  if (isNaN(num1) || isNaN(num2)) {
    console.log(
      `ERROR: One of the inputs were invalid. Please enter only number characters.`,
    );
  } else {
    const sum: number = num1 + num2;
    console.log(`${sum}`);
  }

  // B
  const evenNum: number = Number(readLine(`Enter an even number: `));
  const oddNum: number = Number(readLine(`Enter an odd number: `));
  if (isNaN(evenNum) || isNaN(oddNum)) {
    console.log(
      `ERROR: One of the inputs were not numbers. Please enter only number characters.`,
    );
  } else if (oddNum === 0) {
    console.log(
      `ERROR: Your divisor is ${oddNum} - cannot divide a number by zero`,
    );
  } else {
    console.log(`${evenNum} divided by ${oddNum} = ${evenNum / oddNum}`);
  }
}

// ------------------------------------------ Exercise 4
function runExerciseFour() {
  const radius: number = Number(readLine(`Enter circle radius (number): `));
  if (isNaN(radius)) {
    console.log(`ERROR: ${radius} is not a valid number.`);
  } else {
    console.log(
      `Circle area: ${(Math.PI * radius ** 2).toFixed(2)}\nSphere volume: ${((4 / 3) * Math.PI * radius ** 3).toFixed(2)}`,
    );
  }
}

// ------------------------------------------ Exercise 5
function runExerciseFive() {
  const num1: number = Number(readLine(`Enter a number: `));
  const num2: number = Number(
    readLine(
      `Enter the next consecutive number (descending OR ascending order): `,
    ),
  );

  if (isNaN(num1) || isNaN(num2)) {
    console.log(
      `ERROR: One of the inputs were invalid. Please enter only number characters.`,
    );
  } else {
    if (num1 - num2 === -1) {
      console.log(`Result: Consecutive (ascending)`);
      console.log(`${num1} --> ${num2}`);
    } else if (num1 - num2 === 1) {
      console.log(`Result: consecutive (descending)`);
      console.log(`${num1} --> ${num2}`);
    } else {
      console.log(`Result: not consecutive`);
      console.log(`${num1} -/-> ${num2}`);
    }
  }
}

// ------------------------------------------ Exercise 6
function runExerciseSix() {
  const positiveInt: number = Number(readLine(`Enter a positive integer: `));
  if (isNaN(positiveInt)) {
    console.log(
      `ERROR: ${positiveInt} is not a valid number. Please enter only a number.`,
    );
  } else {
    if (positiveInt < 1) {
      console.log(`${positiveInt} is not a positive number`);
    } else if (positiveInt % 2 === 0) {
      console.log(`${positiveInt} is an even number.`);
    } else {
      console.log(`${positiveInt} is not an even number.`);
    }
  }
}

function runExerciseSeven() {}

function runExerciseEight() {}

function runExerciseNine() {}

function runExerciseTen() {}

function runExerciseEleven() {}

/* ^^^^^^^^^^^^  Add the rest of the exercise functions above this line ^^^^^^^^^^^^ */

let keepAlive = true;
console.clear();
while (keepAlive) {
  try {
    const assignmentChoice = parseInt(
      readLine("Enter assignment number (ctrl + C or -1 to exit): "),
    );
    console.log();
    switch (assignmentChoice) {
      case 1:
        runExerciseOne();
        break;
      case 2:
        runExerciseTwo();
        break;
      case 3:
        runExerciseThree();
        break;
      case 4:
        runExerciseFour();
        break;
      case 5:
        runExerciseFive();
        break;
      case 6:
        runExerciseSix();
        break;
      case 7:
        runExerciseSeven();
        break;
      case 8:
        runExerciseEight();
        break;
      case 9:
        runExerciseNine();
        break;
      case 10:
        runExerciseTen();
        break;
      case 11:
        runExerciseEleven();
        break;

      /* ^^^^^^^^^^^^  Add the rest of the exercises above this line ^^^^^^^^^^^^ */
      case -1:
        keepAlive = false;
        break;
      default:
        console.log(chalk.red("That is not a valid assignment number!"));
        break;
    }
    if (assignmentChoice !== -1) {
      console.log();
      readLine(chalk.dim("Press enter to continue..."));
      console.clear();
    } else {
      console.log(chalk.green("Exiting..."));
    }
  } catch (err) {
    console.log(chalk.red(err));
  }
}
