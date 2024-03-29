// Function to calculate the sum of all elements in an array
function sum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

// Function to remove duplicates from an array
function removeDuplicates(arr) {
    return Array.from(new Set(arr));
}


// Function to find the maximum element in an array
function findMax(arr) {
    return Math.max(...arr);
}

// Function to filter out even numbers from an array
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// Function to filter out odd numbers from an array
function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}


// Function to find the minimum element in an array
function findMin(arr) {
    return Math.min(...arr);
}

// Function to sort an array in ascending order
function sortAscending(arr) {
    return arr.slice().sort((a, b) => a - b);
}

// Function to sort an array in descending order
function sortDescending(arr) {
    return arr.slice().sort((a, b) => b - a);
}

// Function to reverse an array
function reverseArray(arr) {
    return arr.slice().reverse();
}

// Function to check if all elements in the array are of the same type
function allSameType(arr) {
    return arr.every((val, i, array) => typeof val === typeof array[0]);
}
