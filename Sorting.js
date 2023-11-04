
function sortDescending(arr) {
  arr.sort((a, b) => b - a);
}

const inputArray = [];
const numberOfElements = prompt("Enter the number of elements in the array:");

for (let i = 0; i < numberOfElements; i++) {
  const element = parseInt(prompt(`Enter element ${i + 1}:`));
  inputArray.push(element);
}

sortDescending(inputArray);
console.log("Sorted array in descending order:", inputArray);
