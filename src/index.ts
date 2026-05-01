// *** Ignore the following lines ***
import chalk from "chalk";
import prompt from "prompt-sync";
// *** Ignore the above lines ***

// Use the following function to read input from the user:
const readLine = prompt({ sigint: true });

// ------------------------------------------ Exercise 1
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
        const actualStr = "She is the popular singer.";
        const stringToArray = actualStr.split(" ");
        stringToArray.splice(3, 0, "most");
        const result = stringToArray.join(" ");
        console.log(
          `Transforming the sentence "${actualStr}" into something containing more adverbs...`,
        );
        console.log();
        console.log(`Final result: "${result}"`);
        console.log();
        break;

      case "f":
        const actualStr1 = "A friend is the asset of your life";
        const stringToArray1 = actualStr1.split(" ");
        stringToArray1.splice(1, 0, "true");
        stringToArray1.splice(5, 0, "greatest");

        console.log();
        console.log(`Initial sentence was: "${actualStr1}"`);
        console.log(`Has now been turned into: "${stringToArray1.join(" ")}"`);
        console.log();
        break;

      case "g":
        const actualStr2 = "My name is Sebastian Vallin";
        // Alt:
        // const onlyName = actualStr2.slice(11);
        const onlyName = actualStr2.replace("My name is ", "");

        console.log();
        console.log(`Turning this sentence: "${actualStr2}"`);
        console.log(`Into... "${onlyName}"`);
        console.log();
        break;

      case "h":
        const actualStr3 =
          "Arrays are very common in programming, they look something like: [1,2,3,4,5]";

        const stringArray = actualStr3
          .slice(actualStr3.indexOf("1"), actualStr3.indexOf("]"))
          .split(",");

        const numArray: number[] = [];

        for (let i = 0; i < stringArray.length + 1; i++) {
          if (stringArray[i] === "1") {
            numArray.push(Number(stringArray[i]));
          } else if (i === 5) {
            numArray.push(8);
          } else if (Number(stringArray[i]) > 1) {
            numArray.push(Number(stringArray[i]) + 2);
          }
        }

        const joinedNumbers = `[${numArray.join(", ")}]`;

        console.log();
        console.log(`The string "${actualStr3}" is now turned into...`);
        console.log(`${joinedNumbers}`);
        console.log(`Which is a type of: ${typeof joinedNumbers}`);
        console.log();
        break;

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
function runExerciseEleven() {
  let total = 0;
  let op: string;
  console.log("Welcome to the calculator!");
  console.log("This calculator can perform:");
  console.log(
    "- addition (+)\n- subtraction (-)\n- multiplication (*)\n- division (/)",
  );
  console.log();
  console.log(
    "User input will be prompted in the following order: number | operator | number",
  );

  while (true) {
    const num1 = Number(readLine("Enter number: "));
    while (true) {
      op = readLine("Enter operator (+, -, *, /): ");
      if (op !== "+" && op !== "-" && op !== "*" && op !== "/") {
        console.log("Invalid operator. Must be + | - | * | / ");
      } else {
        break;
      }
    }
    const num2 = Number(readLine("Enter number: "));

    if (Number.isNaN(num1) || Number.isNaN(num2)) {
      console.log(`Invalid number input. Must be numeric values only.`);
    } else if (op === "/" && num2 === 0) {
      console.log("You cannot divide by zero.");
    } else {
      switch (op) {
        case "+":
          total = num1 + num2;
          break;
        case "-":
          total = num1 - num2;
          break;
        case "*":
          total = num1 * num2;
          break;
        case "/":
          total = num1 / num2;
          break;
      }

      console.log(`${num1} ${op} ${num2} = ${total}`);
    }
  }
}

// ------------------------------------------ Exercise 12
function runExerciseTwelve() {
  const userNum: number = Number(
    readLine("Enter any (whole) number below 100: "),
  );

  console.log("---------------For loop start-----------------");
  // Descending
  for (let i = userNum; i > 0; i--) {
    console.log(i);
  }
  // Ascending
  for (let i = 1; i <= Number(userNum); i++) {
    console.log(i);
  }
  console.log("-----------------For loop end-----------------");
  console.log("----------------While loop Start--------------");

  let whileCounterPos = 1;
  let whileCounterNeg: number = userNum;

  while (whileCounterPos <= userNum) {
    while (whileCounterNeg > 0) {
      console.log(whileCounterNeg);
      whileCounterNeg--;
    }
    console.log(whileCounterPos);
    whileCounterPos++;
  }

  console.log("-----------------While loop end-----------------");
  console.log("---------------Do-while loop Start--------------");
  let doCounterPos = 1;
  let doCounterNeg = userNum;
  // Descending
  do {
    console.log(doCounterNeg);
    doCounterNeg--;
  } while (doCounterNeg > 0);
  // Ascending
  do {
    console.log(doCounterPos);
    doCounterPos++;
  } while (doCounterPos <= userNum);
}

// ------------------------------------------ Exercise 13
function runExerciseThirteen() {
  while (true) {
    const secretNumber = Math.floor(Math.random() * 10) + 1;
    console.log("Try to guess the secret number (between 1-10)!");
    let userAns = Number(readLine("Guess: "));
    let exitLoop: boolean = false;

    if (isNaN(userAns)) {
      console.log(`${userAns} is not a valid number. `);
    } else if (userAns < 1 || userAns > 10) {
      console.log(`You guessed outside of the range!`);
    } else if (userAns !== secretNumber) {
      console.log(`Your guess: ${userAns}\nSecret number: ${secretNumber}`);
      console.log("Unfortunately, you guessed wrong. Better luck next time!");
    } else if (userAns === secretNumber) {
      console.log(`Your guess: ${userAns}\nSecret number: ${secretNumber}`);
      console.log("You guessed the secret number!");
    } else {
      console.log(
        "Something went seriously wrong behind the scenes - try again",
      );
    }

    exitLoop =
      readLine("Do you wish to exit this game/exercise? (yes | no): ") ===
      "yes";
    if (exitLoop === true) {
      break;
    }
  }
}

// ------------------------------------------ Exercise 14
function runExerciseFourteen() {
  console.log("Displaying multiplication table from 1-10:");
  console.log();

  let multipliedNums: number[] = [];
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      multipliedNums.push(i * j);
    }
    console.log(multipliedNums.join("\t"));
    multipliedNums.length = 0;
  }
}

// ------------------------------------------ Exercise 15
function runExerciseFifteen() {
  console.log("Printing upside down triangle:");
  console.log();

  let starArray: string[] = [];
  let spaces: string = "";
  for (let i = 0; i < 5; i++) {
    spaces = " ".repeat(i);
    for (let j = 5; j > i; j--) {
      starArray.push("*");
    }
    console.log(spaces + starArray.join(" "));
    starArray.length = 0;
  }
}

// ------------------------------------------ Exercise 16
function runExerciseSixteen() {
  while (true) {
    console.log();
    console.log("The way this works:   ");
    console.log("-> you enter numbers...");
    console.log("-> enter 0 to stop adding further numbers...");
    console.log("-> program adds all entered numbers into one figure...");
    console.log("-> and displays the sum.");
    console.log();

    let sum = 0;
    let userInput = 1;
    let numCounter = 0;

    do {
      const userInputString = readLine("Enter a number: ");

      if (userInputString.trim() === "") {
        console.log("Please enter a number.");
      } else {
        userInput = Number(userInputString);

        if (isNaN(userInput)) {
          console.log("That was not a number. Please enter a number.");
        } else {
          if (userInput !== 0) {
            numCounter++;
            sum += Number(userInput);
          }
        }
      }
    } while (userInput !== 0);

    console.log(`The final sum of all numbers you entered: ${sum}`);
    if (numCounter > 0) {
      console.log(`The average of all numbers is: ${sum / numCounter}`);
    } else {
      console.log(`No average since no numbers were added.`);
    }

    console.log();

    let runAgain = "";
    do {
      runAgain = readLine("Run again? (yes | no): ");

      if (!["yes", "no"].includes(runAgain)) {
        console.log("Input error: please enter a valid answer (yes | no)");
      }
    } while (!["yes", "no"].includes(runAgain));

    if (runAgain === "no") {
      break;
    }
  }
}

// ------------------------------------------ Exercise 17
function runExerciseSeventeen() {
  console.log(
    "The program will run a fibonacci sequence up to the number you enter.",
  );
  const userInput = Number(readLine("Enter a non-negative integer: "));

  if (isNaN(userInput) || userInput < 0) {
    console.log("Please enter a valid non-negative integer.");
    return;
  }

  if (userInput === 0) {
    console.log(0);
    return;
  }

  let a = 0;
  let b = 1;

  console.log(a);
  console.log(b);

  for (let i = 2; i <= userInput; i++) {
    const next = a + b; // 0 + 1 = 1
    a = b; // a = 1
    b = next; // b = 1

    console.log(next);
  }
}

// ------------------------------------------ Exercise 19
function runExerciseNineteen() {
  console.log(
    "To calculate the area of a triangle, enter the height and base and let the program do the rest.",
  );
  const height = Number(readLine("Height: "));
  const base = Number(readLine("Base: "));
  let result = 0;

  function calcArea(height: number, base: number) {
    return (result = 0.5 * base * height);
  }

  calcArea(height, base);
  console.log(`The triangle's area is: 0.5 * ${height} * ${base} = ${result}`);
}

// ------------------------------------------ Exercise 20
function runExerciseTwenty() {
  function swapNums(num1: number, num2: number) {
    let temp = num1;
    num1 = num2;
    num2 = temp;

    console.log(`Num1 swapped: ${num1}`);
    console.log(`Num2 swapped: ${num2}`);

    return [num1, num2];
  }

  const swappedNums: number[] = swapNums(1, 2);
  const swappedNum1 = swappedNums[0];
  const swappedNum2 = swappedNums[1];

  console.log(`Num1: ${swappedNum1}`);
  console.log(`Num1: ${swappedNum2}`);
}

// ------------------------------------------ Exercise 21
function runExerciseTwentyone() {
  const currentYear = new Date().getFullYear();

  function calcAge(birthYear: number): number {
    return currentYear - birthYear;
  }

  let birthYear: number = NaN;

  while (true) {
    const input = Number(readLine("Enter your birthyear(4 digits): ").trim());

    if (isNaN(input) || input > currentYear) {
      console.log("Invalid year, try again.");
    } else {
      birthYear = input;
      break;
    }
  }

  const userAge = calcAge(birthYear);

  console.log(`You are, or will be, ${userAge} years old this year.`);
}

// ------------------------------------------ Exercise 22
function runExerciseTwentytwo() {
  const currentYear = new Date().getFullYear();
  const calcAge = (birthYear: number): number => {
    return currentYear - birthYear;
  };
  let userAge: number = NaN;
  let ans: string;
  let numDrinks: number;

  while (true) {
    const userName: string = readLine("Hello there! Please enter your name: ");

    while (true) {
      const birthYear = Number(
        readLine(
          `Greetings ${userName}! Please enter your birth year (4 digits): `,
        ).trim(),
      );

      if (isNaN(birthYear) || birthYear > currentYear) {
        console.log("Invalid year, try again.");
      } else {
        userAge = calcAge(birthYear);
        break;
      }
    }

    if (userAge >= 18) {
      // Start question
      ans = readLine("Would you like to order a beer? (yes | no): ")
        .trim()
        .toLowerCase();
      if (!["yes", "no"].includes(ans)) {
        console.log("Please answer the bartender with an intelligible answer.");

        // NO to beer branch -> ask if user wants soda
      } else if (ans === "no") {
        while (true) {
          ans = readLine("Would you like to order a soda instead? (yes | no): ")
            .trim()
            .toLowerCase();

          if (!["yes", "no"].includes(ans)) {
            console.log(
              "Please answer the bartender with an intelligible answer.",
            );
          } else if (ans === "no") {
            console.log(
              "Well, beer and soda is all this tavern has to offer so you are out of options buddy.",
            );
            break;
          } else if (ans === "yes") {
            console.log("How many sodas would you like?");
            numDrinks = Number(readLine("Number of sodas: ").trim());
            console.log(`You are served ${numDrinks} sodas by the bartender.`);
            break;
          }
        }

        // YES to beer branch
      } else if (ans === "yes") {
        while (true) {
          console.log("How many beers would you like?");
          numDrinks = Number(readLine("Number of beers: ").trim());
          console.log(`You are served ${numDrinks} beers by the bartender.`);
          ans = readLine("Order another round of beers? (yes | no): ")
            .trim()
            .toLowerCase();
          if (!["yes", "no"].includes(ans)) {
            console.log(
              "Please answer the bartender with an intelligible answer.",
            );
          } else if (ans === "no") {
            break;
          }
        }
      }

      // Below 18 -> ask if user wants soda
    } else {
      console.log(
        `Sorry ${userName}, you're not of age for beer yet, but I can serve you soda if you like?`,
      );
      ans = readLine("Would you like a soda? (yes | no): ");

      if (!["yes", "no"].includes(ans)) {
        console.log("Please answer the bartender with an intelligible answer.");
      } else if (ans === "no") {
        console.log(
          "Well, beer and soda is all this tavern has to offer so you are out of options buddy.",
        );
      } else if (ans === "yes") {
        while (true) {
          console.log("How many sodas would you like?");
          numDrinks = Number(readLine("Number of sodas: ").trim());
          console.log(`You are served ${numDrinks} sodas by the bartender.`);
          ans = readLine("Order another round of sodas? (yes | no): ")
            .trim()
            .toLowerCase();
          if (!["yes", "no"].includes(ans)) {
            console.log(
              "Please answer the bartender with an intelligible answer.",
            );
          } else if (ans === "no") {
            break;
          }
        }
      }
    }

    ans = readLine("Exit the tavern? (yes | no): ").trim().toLowerCase();
    if (ans === "yes") {
      console.log("You exit the tavern...");
      break;
    } else {
      console.log();
      console.log("You go up to the bartender for another round of drinks...");
      console.log(
        "... Though, he seems to suffer from short term memory loss...",
      );
      console.log();
      continue;
    }
  }
}

// ------------------------------------------ Exercise 23
function runExerciseTwentythree() {
  const numbers: number[] = [2, 5, 10, 23, 3];

  // ------ Guarded check for highest number (in case of empty array) using ternary expression, .
  // -> if array contains 1 or more elements -> = "truthy" -> perform Math.max() and return highest number
  // -> if array contains 0 elements -> = "falsy" -> returns undefined
  const max = numbers.length ? Math.max(...numbers) : undefined;

  // ------ Alt: Simple check for highest number in array since array numbers are hardcoded.
  // const max = Math.max(...numbers);

  console.log(`Here's an array of numbers:`);
  console.log(numbers);
  console.log();
  console.log(`The highest number in the array is: ${max}`);
}

// ------------------------------------------ Exercise 24
function runExerciseTwentyfour() {
  console.log("Enter a series of numbers separated by commas.");
  const userNums: string = readLine("Enter numbers: ").trim();

  // Convert string of numbers into array of numbers using .split() and .map()
  const userNumsArray = userNums.split(",").map((number) => Number(number));

  // Ternary expressions to perform Math / reduce methods and return -> a value || undefined if array is empty
  const arrayMax = userNumsArray.length
    ? Math.max(...userNumsArray)
    : undefined;
  const arrayMin = userNumsArray.length
    ? Math.min(...userNumsArray)
    : undefined;
  const arrayAvg = userNumsArray.length
    ? userNumsArray.reduce((total, num) => total + num, 0) /
      userNumsArray.length
    : undefined;

  console.log(`You entered: ${userNumsArray}`);
  console.log(`The highest number entered was: ${arrayMax}`);
  console.log(`The lowest number entered was: ${arrayMin}`);
  console.log(`The average of all numbers entered was: ${arrayAvg}`);
}

// ------------------------------------------ Exercise 25
function runExerciseTwentyfive() {
  const randomNums: number[] = [];

  // Range of random numbers generated: 1-100
  for (let i = 0; i < 20; i++) {
    randomNums.push(Math.floor(Math.random() * 100) + 1);
  }

  const evenArray = randomNums.filter((num) => num % 2 === 0);
  const oddArray = randomNums.filter((num) => num % 2 !== 0);

  console.log(`Array of randomly generated numbers: `);
  console.log(randomNums.join(" | "));
  console.log();
  console.log(`These are the even numbers found in the array:`);
  console.log(evenArray.join(" | "));
  console.log();
  console.log(`These are the odd numbers found in the array:`);
  console.log(oddArray.join(" | "));
  // console.log(randomNums);
}

// ------------------------------------------ Exercise 26
function runExerciseTwentysix() {
  const userNums: number[] = [];

  console.log("Enter 10 numbers of your choice (negative or positive):");
  for (let i = 1; i <= 10; i++) {
    while (true) {
      console.log(`Current input: ${i}/10`);
      const stringNum = readLine("Enter number: ");
      if (stringNum === "") {
        console.log("Invalid input: empty value.");
        continue;
      }
      const toNum = Number(stringNum);
      if (Number.isNaN(toNum)) {
        console.log(
          "Invalid input. Only positive (e.g. 3, 10, 256) or negative numbers (e.g. -3, -10, -256)",
        );
        continue;
      }
      userNums.push(toNum);
      break;
    }
  }

  const negatives = userNums.filter((num) => num < 0);

  negatives.length
    ? console.log(`Negative numbers entered: ${negatives.join(" | ")}`)
    : console.log("No negative numbers found among your entries");
}

// ------------------------------------------ Exercise 27
function runExerciseTwentyseven() {
  const userNums: number[] = [];

  for (let i = 1; i <= 12; i++) {
    while (true) {
      console.log(`Current input: ${i}/12`);
      const stringNum = readLine("Enter number: ");
      if (stringNum === "") {
        console.log("Invalid input: empty value.");
        continue;
      }
      const toNum = Number(stringNum);
      if (Number.isNaN(toNum)) {
        console.log(
          "Invalid input. Input can only be positive integer numbers.",
        );
        continue;
      }
      userNums.push(toNum);
      break;
    }
  }

  const evenArray = userNums.filter((num) => num % 2 === 0);
  const oddArray = userNums.filter((num) => num % 2 !== 0);

  console.log(`List of entered numbers: `);
  console.log(userNums.join(" | "));
  console.log();
  console.log(`These are the even numbers found in the list:`);
  console.log(evenArray.join(" | "));
  console.log();
  console.log(`These are the odd numbers found in the list:`);
  console.log(oddArray.join(" | "));
}

// ------------------------------------------ Exercise 28
function runExerciseTwentyeight() {
  console.log("Sorry, this optional exercise was skipped!");
}

// ------------------------------------------ Exercise 29
function runExerciseTwentynine() {
  console.log("Sorry, this optional exercise was skipped!");
}

// ------------------------------------------ Exercise 30
function runExerciseThirty() {
  console.log("Sorry, this optional exercise was skipped!");
}

// ------------------------------------------ Exercise 31
function runExerciseThirtyone() {
  const currentYear = new Date().getFullYear();
  console.log(
    "This program will check if  the year you enter is the current year.",
  );
  while (true) {
    const userInputStr = readLine("Enter year: ");
    if (userInputStr === "") {
      console.log("Invalid input: empty value.");
      continue;
    }
    const userInputNum = Number(userInputStr);
    if (Number.isNaN(userInputNum)) {
      console.log("Invalid input: Year must be a number.");
      continue;
    }
    if (currentYear === userInputNum) {
      console.log(`The year you entered is indeed the current year.`);
      console.log(`Current year: ${currentYear} = Your year: ${userInputNum}`);
      break;
    } else {
      console.log(
        `The year you entered (${userInputNum}) was not the same as current year (${currentYear})`,
      );
      break;
    }
  }
}

// ------------------------------------------ Exercise 32
function runExerciseThirtytwo() {
  console.log("Displaying various dates in various formats:");
  // Short Date format example: const d = new Date("03/25/2015");
  const today = new Date();
  const todayShort = today.toLocaleDateString("sv-SE");
  const todayLong = today.toLocaleDateString("sv-SE", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  const yesterdayShort = yesterday.toLocaleDateString("sv-SE");

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const tomorrowShort = tomorrow.toLocaleDateString("sv-SE");

  console.log(`Today (short): ${todayShort}`);
  console.log(`Today (long): ${todayLong}`);
  console.log(`Yesterday (short): ${yesterdayShort}`);
  console.log(`Tomorrow (short): ${tomorrowShort}`);
}

// ------------------------------------------ Exercise 33
function runExerciseThirtythree() {
  const currentYear = new Date().getFullYear();
  console.log(
    "Enter a date to determine if it's in a past, current, or future year.",
  );
  console.log("Date format: YYYY-MM-DD (e.g., 2024-01-15)");

  const userDateStr: string = readLine("Enter date: ").trim();

  const userDate = new Date(userDateStr);

  if (isNaN(userDate.getTime())) {
    console.log("Invalid input. Please enter a valid date (YYYY-MM-DD).");
    return;
  }

  const userYear = userDate.getFullYear();

  if (userYear < currentYear) {
    console.log();
    console.log("Date entered is in a past year.");
  } else if (userYear === currentYear) {
    console.log("Date entered is in the current year");
  } else {
    console.log("Date entered is in a future year.");
  }
}

// ------------------------------------------ Exercise 34
function runExerciseThirtyfour() {
  const currentYear = new Date().getFullYear();
  const startYear = 1990;
  let leapYearCount = startYear;

  console.log(
    `Searching leap years from 1990 to current year (${currentYear}):`,
  );
  while (true) {
    if (
      leapYearCount % 4 === 0 &&
      (leapYearCount % 100 !== 0 || leapYearCount % 400 === 0)
    ) {
      console.log(leapYearCount);
    }

    if (currentYear === leapYearCount) {
      break;
    }

    leapYearCount++;
  }
}

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
      case 12:
        runExerciseTwelve();
        break;
      case 13:
        runExerciseThirteen();
        break;
      case 14:
        runExerciseFourteen();
        break;
      case 15:
        runExerciseFifteen();
        break;
      case 16:
        runExerciseSixteen();
        break;
      case 17:
        runExerciseSeventeen();
        break;
      case 19:
        runExerciseNineteen();
        break;
      case 20:
        runExerciseTwenty();
        break;
      case 21:
        runExerciseTwentyone();
        break;
      case 22:
        runExerciseTwentytwo();
        break;
      case 23:
        runExerciseTwentythree();
        break;
      case 24:
        runExerciseTwentyfour();
        break;
      case 25:
        runExerciseTwentyfive();
        break;
      case 26:
        runExerciseTwentysix();
        break;
      case 27:
        runExerciseTwentyseven();
        break;
      case 28:
        runExerciseTwentyeight();
        break;
      case 29:
        runExerciseTwentynine();
        break;
      case 30:
        runExerciseThirty();
        break;
      case 31:
        runExerciseThirtyone();
        break;
      case 32:
        runExerciseThirtytwo();
        break;
      case 33:
        runExerciseThirtythree();
        break;
      case 34:
        runExerciseThirtyfour();
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
