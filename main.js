// <-- adding function // the below function sum the given parameters--->
function addNumbers(a, b) {
  let result = a + b;
  console.log("The sum of two given numbers are= " + result);
  console.log(typeof result);
}
addNumbers(12 + 5);
console.log(typeof addNumbers);
addNumbers(12 * 30 + 5, "   Days of the Years");
console.log(typeof addNumbers);
addNumbers("A" + "F");
console.log(typeof addNumbers);
// ------------------ object creation -------------

const person = {
  name: "Habib",
  lastName: "Afzali",
  age: 30,
  professon: "Student",
};
console.log(
  person.name,
  person.lastName,
  person.age + " years old",
  person.professon
);
