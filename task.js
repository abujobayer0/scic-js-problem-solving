//Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.
const reversedStr = (str) => {
  const newStr = str.split("");
  let reversedString = "";
  for (let i = newStr.length - 1; i >= 0; i--) {
    reversedString += newStr[i];
  }
  console.log(`reversed sting is ${reversedString}.`);
  return reversedString;
};
reversedStr("hello world");
// Task 1 Finished

// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.
const sumOfPositiveNumbers = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    const IntNum = arr[i];
    if (IntNum > 0) {
      total += IntNum;
    }
  }
  console.log(`total positive number sum ${total}.`);
  return total;
};
sumOfPositiveNumbers([2, -5, 100, -3, 7]);

// Task 2 Finished

//Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

const numbertargetFinderArr = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        console.log([i, j]);
        return [i, j];
      }
    }
  }
};

const inputArray = [1, 3, 6, 8, 11, 15];
const targetValue = 7;
numbertargetFinderArr(inputArray, targetValue);

// Task 4 Finished

// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const calculatorFunction = (num1, num2, operator) => {
  if (operator === "+") {
    console.log(num1 + num2);
    return num1 + num2;
  } else if (operator === "-") {
    console.log(num1 - num2);
    return num1 - num2;
  } else if (operator === "*") {
    console.log(num1 * num2);
    return num1 * num2;
  } else if (operator === "/") {
    console.log(num1 / num2);
    return num1 / num2;
  } else {
    console.log("something went wrong...");
    return "error occured";
  }
};
calculatorFunction(100, 40, "+");

//Task 5 Finished

// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function RandomPasswordGenerator(length) {
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const digits = "0123456789";
  const specialCharacters = "!@#$%^&*()_-+=<>?/[]{}|";
  const allCharacters =
    uppercaseLetters + lowercaseLetters + digits + specialCharacters;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters.charAt(randomIndex);
  }

  return password;
}

const passwordLength = 12;
const randomPassword = RandomPasswordGenerator(passwordLength);
console.log("Random Password:", randomPassword);

// Task 6 Finished

// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInteger(romanNum) {
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const inputValue = romanNum.split("");
  let total = 0;
  for (let i = 0; i < inputValue.length; i++) {
    const InputRomanChar = inputValue[i];
    const currentRomanValue = romanValues[InputRomanChar];
    total += currentRomanValue;
  }
  console.log(total);
  return total;
}
romanToInteger("M");

// Task 7 Finished

//Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const findSecondSmallestNumber = (arr) => {
  const result = arr.slice().sort((a, b) => a - b);
  console.log(result[1]);
  return result[1];
};
findSecondSmallestNumber([9, 5, 7, 3, 7, 1]);
// Task 8 Finished
