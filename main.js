// Variables
let year = 2023;
let season = "spring";
let isStudent = true;

// Function to print a message with a name
function printMessage(name) {
  let message = "Hello";
  document.getElementById("message").textContent = message + " " + name;
}
printMessage("Habib");

// Function to add two numbers and display the result
function addNumbers(a, b) {
  let result = a + b;
  document.getElementById("result").textContent = result;
}
addNumbers(12, 5);
// Function to check if a number is even or odd and display the result
function evenOdd(number) {
  let result = number;
  let numberElement = document.getElementById("number");
  if (result % 2 === 0) {
    numberElement.textContent = result + " is an even number!";
  } else {
    numberElement.textContent = result + " is an odd number!";
  }
}
evenOdd(111);

// Car object
const car = {
  brand: "MercedesBenz",
  model: "x-generation",
  year: 2022,
  doors: 4,
  engine: {
    type: "V6",
    horsepower: 200,
    fuelType: "gasoline",
  },
};

// Function to get the car brand
function getCarBrand() {
  document.getElementById("carBrand").textContent = car.brand;
}
// Function to get the number of doors of the car
function getNumberOfDoors() {
  document.getElementById("numDoors").textContent = car.doors;
}
// Function to get the fuel type of the car
function getFuelType() {
  document.getElementById("fuelType").textContent = car.engine.fuelType;
}
getCarBrand();
getNumberOfDoors();
getFuelType();

// Array of numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Function to add a number to the array
function addToArray(number) {
  numbers.push(number);
}
addToArray(11);
// Function to remove a number from the array
function removeFromArray(number) {
  const index = numbers.indexOf(number);
  if (index !== -1) {
    numbers.splice(index, 1);
  }
}
removeFromArray(5);
// Function to print the array
function printArray() {
  let arrayElement = document.getElementById("array");
  arrayElement.textContent = numbers.join(", ");
}

printArray();

// Function to find the largest number in the array
function findLargestNumber(numbers) {
  if (numbers.length === 0) {
    return null;
  }
  let largest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  return largest;
}

const largestNumber = findLargestNumber(numbers);
document.getElementById("largest").textContent = largestNumber;

// Function to find the smallest number in the array
function findSmallestNumber(numbers) {
  if (numbers.length === 0) {
    return null;
  }
  let smallest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
      smallest = numbers[i];
    }
  }
  return smallest;
}

const smallestNumber = findSmallestNumber(numbers);
document.getElementById("smallest").textContent = smallestNumber;

// Function to capitalize the first letter of each string in an array
function capitalizeFirstLetter(strings) {
  if (strings.length === 0) {
    return [];
  }

  const capitalizedStrings = strings.map((string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  });

  return capitalizedStrings;
}

let names = ["mauel", "paco", "fernando", "jorge"];
const capitalizedNames = capitalizeFirstLetter(names);
document.getElementById("capitalized").textContent =
  capitalizedNames.join(", ");

// Function to convert a string to lowercase
const capital = "THIS IS TEXT WRITTEN WITH CAPITAL LETTERS";

function convertToLowerCase() {
  let lowercaseText = capital.toLowerCase();
  document.getElementById("lowercase").textContent = lowercaseText;
}

convertToLowerCase();

// Function to convert a string to uppercase
const lowertext = "this is a lowercase text";

function convertToUpperCase() {
  let uppercaseText = lowertext.toUpperCase();
  document.getElementById("uppercase").textContent = uppercaseText;
}

convertToUpperCase();

// Function to find the largest number in the array and display the result
function findLargestNumberInArray(numbers) {
  if (numbers.length === 0) {
    return null;
  }
  let largest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  document.getElementById("largestArray").textContent =
    "Largest Array Element is: " + largest;
}

findLargestNumberInArray(numbers);

function showMessage() {
  document.getElementById("btnmessage").textContent = "Hi there!";
}
