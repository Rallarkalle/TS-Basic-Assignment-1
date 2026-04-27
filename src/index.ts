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

// ------------------------------------------ Exercise 7
function runExerciseSeven() {
  const temp: number = Number(readLine(`Enter your temperature: `));

  if (isNaN(temp)) {
    console.log(
      `ERROR: ${temp} is not a valid number. Please enter only a number.`,
    );
  } else {
    if (temp < 36) {
      console.log(
        `At ${temp}° you might wanna go get a blanket and a hot beverage.`,
      );
    } else if (temp <= 37.3) {
      console.log(`At ${temp}° you do not have a fever.`);
    } else if (temp > 37.3 && temp < 38) {
      console.log(`At ${temp}° you have a low-grade fever.`);
    } else if (temp >= 38 && temp < 39) {
      console.log(`At ${temp}° you have a moderate fever.`);
    } else if (temp >= 39 && temp < 40) {
      console.log(`At ${temp}° you have a high fever.`);
    } else if (temp >= 40) {
      console.log(
        `At ${temp}° you have a very high fever (medical attention recommended).`,
      );
    }
  }
}

// ------------------------------------------ Exercise 8
function runExerciseEight() {
  console.log("Please enter your grade below (A/B/C/D/E)");
  const userGrade: string = readLine(`Grade: `).toLowerCase();
  switch (userGrade) {
    case "e":
      console.log(
        `You met the minimum requirements, but more study is recommended.`,
      );
      break;
    case "d":
      console.log(`You passed, but there's room for improvement.`);
      break;
    case "c":
      console.log(`Good effort. You passed and showed solid understanding.`);
      break;
    case "b":
      console.log(`Great job! You've shown strong understanding and effort.`);
      break;
    case "a":
      console.log(`Outstanding work! You really mastered the material.`);
      break;
    default:
      console.log(`${userGrade} is not a valid grade.`);
  }
}

// ------------------------------------------ Exercise 9
function runExerciseNine() {
  const userStr: string = readLine(
    "Enter any word or sentence to see if it is a palindrome or not: ",
  ).toLowerCase();
  // Clean string of everything except numbers and letters using regex pattern method
  const cleaned = userStr.replace(/[^a-z0-9]/g, "");
  // create a reversed version of the string
  const reversed = cleaned.split("").reverse().join("");

  let isPalindrome = true;

  for (let i = 0; i < cleaned.length; i++) {
    // compares original char order vs reversed char order:
    if (cleaned[i] !== reversed[i]) {
      // console.log(`"${userStr}" is not a palindrome.`);
      // console.log(`isPalindrome(true/false): ${(isPalindrome = false)}`);
      isPalindrome = false;
      break;
    }
  }

  console.log(
    isPalindrome
      ? `"${userStr}" is a palindrome.`
      : `"${userStr}" is not a palindrome.`,
  );
}

// ------------------------------------------ Exercise 10
function runExerciseTen() {
  while (true) {
    console.log(
      `Choose a letter between A-H to perform a task, or type /exit to exit this exercise.`,
    );
    const input = readLine(`Task: `).toLowerCase();

    switch (input) {
      case "a":
        const origStr = "The quick fox Jumped Over the DOG";
        const newStr =
          origStr.charAt(0).toUpperCase() +
          origStr
            .slice(1)
            .toLowerCase()
            .replace("quick", "brown")
            .replace("dog", "lazy dog");

        console.log("-------------------------------");
        console.log(`Converting: "${origStr}" --> INTO --> "${newStr}"`);
        console.log("-------------------------------");
        break;
      case "b":
        console.log("---- Check if entered words are the same ----");
        const word1: string = readLine(`Enter a word: `).toLowerCase().trim();
        const word2: string = readLine(`Enter a second word: `)
          .toLowerCase()
          .trim();
        if (word1 === word2) {
          console.log(
            `"${word1}" = "${word2}" --> You entered matching words.`,
          );
        } else {
          console.log(`"${word1}" and "${word2}" do not match eachother.`);
        }
        break;

      case "c":
        const donkey: string = readLine(
          `Enter "Donkey" to transform it into a different animal: `,
        )
          .toLowerCase()
          .trim();

        if (donkey !== "donkey") {
          console.log(`You didn't enter donkey, ya donkey!`);
        } else {
          const monkey = donkey.charAt(0).replace("d", "M") + donkey.slice(1);
          console.log(`Donkey is magically transformed into... ${monkey}!`);
        }
        break;

      case "d":
        const singularStr =
          "I am going to visit Kolmården zoo tomorrow. I am a big fan of the dolphin show. I may watch all dolphin shows during the day. I would like to take a gondola safari as well. I wish to visit Bamse and his team there.";
        // replace words in above sentence: I --> we , am --> are
        const pluralStr = singularStr.replace(/I/g, "We").replace(/am/g, "are");
        console.log(pluralStr);
        break;
      case "e":

      case "f":

      case "g":

      case "h":

      default:
        if (input === "/exit") {
          break;
        } else {
          console.log(`${input} is not a valid choice.`);
        }
    }

    if (input === "/exit") {
      break;
    }
  }
}

// ------------------------------------------ Exercise 11
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
