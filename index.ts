// Assignment 4

// Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array 
// where each number is multiplied by 2.

let givenArray: number[] =  [1, 2, 3, 4, 5] 
let nextArray: number[] = givenArray.map((numbers1) => {
    return numbers1 * 2
}) 
console.log(`Result of array multiplied by 2 is = `, nextArray)

// Given an array of strings ["apple", "banana", "cherry", "date", "grape"], 
// use the filter method to create a new array containing only the fruits with more than 5 characters.

let stringArray: string[] = ["apple", "banana", "cherry", "date", "grape"];
let arrayMoreThanFive: string[] = stringArray.filter((moreThan5)=>{
    return moreThan5.length > 5
})

console.log(`Array of Fruits with more than 5 characters is = `, arrayMoreThanFive);

// Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 
// use the map and filter methods together to create a new array containing the squares of even numbers.

let numbersArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers: number[] = numbersArray.filter((evenNum)=> {
    return evenNum % 2 === 0;
})
console.log(`Array of even Numbers is = `, evenNumbers);

let newArrayEvenNum: number[] = evenNumbers.map((square)=>{
    return square * square
});
console.log(`Array of squares of even numbers is = `, newArrayEvenNum);

// Given an array of temperatures in Celsius [0, 10, 20, 30, 40], 
// use the map method to create a new array where each temperature is converted to Fahrenheit 
// using the formula (Celsius * 9/5) + 32.

let tempInCelsius: number[] = [0, 10, 20, 30, 40];
let tempInFahrenheit: number[] = tempInCelsius.map((temp)=>{
    return temp * (9/5) + 32;
}) 
console.log(`Temperature in Fahrenheit is = `, tempInFahrenheit);


// Given an array of numbers [3, 6, 9, 12, 15, 18], 
// use the map and filter methods together to create a new array containing the doubled values of odd numbers.

let arrayOfNumbers: number[] = [3, 6, 9, 12, 15, 18];
let oddArray: number[] = arrayOfNumbers.filter((newOddArray)=>{
    return newOddArray % 2 !== 0
}) 
console.log(`Array of Odd Numbers is = `, oddArray)
let doubleOddNumbers: number[] = oddArray.map((doubled)=>{
    return doubled * 2
})
console.log(`Array of double of Odd Numbers is = `, doubleOddNumbers)