// 1. Write a range function that takes two arguments, start and end, and returns an array
// containing all the numbers from start up to (and including) end.
// Example output:
// console.log(range(1, 10)); // outputs [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// make a function named range
function range(beginning, end) {
    // made a let variable let array = [];
    let array = [];
    // made a for loop
    for (let i = beginning; i <= end; i++) {
        // added i to the array
        // pushed i to the array
        array.push(i);
    }
    // return the array
    return array;
}
// called the function
console.log(range(1, 10));
console.log(range(50, 79));
// 2. Next, write a sum function that takes an array of numbers and returns the sum of
// these numbers. Run the example program and see whether it does indeed return 55.
// Example output:
// console.log(sum(range(1, 10))); // returns 55

// made a function named sum

function sum(array) {
    // made a let variable named total
    let total = 0;
    // made a for loop
    for (let i = 0; i < array.length; i++) {
        // added i to the total
        // added array[i] to the total
        total += array[i];
    }
    // return the total
    return total;
}
// called the variable
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// called the function
console.log(sum(array));



// 3. Arrays have a reverse method that changes the array by inverting the order in which
// its elements appear. For this exercise, write two functions, reverseArray and
// reverseArrayInPlace. The first, reverseArray, takes an array as an argument and
// produces a new array that has the same elements in the inverse order. The second,
// reverseArrayInPlace, does what the built-in reverse method does: it modifies the array
// given as an argument by reversing its elements. Neither may use the standard reverse
// method.
// Example output for reverseArray:
// console.log(reverseArray(["A", "B", "C"])); // outputs ["C", "B", "A"];
// Example output for reverseArrayInPlace:
// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue); // outputs [5, 4, 3, 2, 1]

// made a function named reverseArray
function reverseArray(array) {
    // made a let variable named newArray
    let newArray = [];
    // made a for loop
    for (let i = array.length - 1; i >= 0; i--) {
        // added array[i] to the newArray
        newArray.push(array[i]);
    }
    // return the newArray
    return newArray;
}
// called the function
console.log(reverseArray(["A", "B", "C"]));

// made a function named reverseArrayInPlace
function reverseArrayInPlace(array) {
    // made a for loop
    for (let i = 0; i < array.length / 2; i++) {
        // made a let variable named temp
        let temp = array[i];
        // added array[array.length - 1 - i] to the temp
        array[i] = array[array.length - 1 - i];
        // added temp to array[array.length - 1 - i]
        array[array.length - 1 - i] = temp;
    }
    // return the array
    return array;
}
// called the function
let arrayValue = [1, 2, 3, 4, 5];
// called the function
reverseArrayInPlace(arrayValue);
// called the variable
console.log(arrayValue);
