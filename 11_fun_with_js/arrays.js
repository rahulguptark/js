const myArr = []
// %DebugPrint(myArr)

// Types of arrays in javascript

// Continious, Holey

// further they are of three types:

// SMI (small integer)
// packed element
// Double(float, string, function)

const arrTwo = [1, 2, 3, 4, 5]
// PACKED_SMI_ELEMENTS

arrTwo.push(6.5)
// PACKED_DOUBLE_ELEMENTS

arrTwo.push('7')
// PACKED_ELEMENTS

arrTwo[10] = 11
// HOLEY_ELEMENTS

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);

// Whenever we want to access any element from the array the first step is:

// Bound check
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 10)
// hasOwnProperty(Object.prototype, 10)

// holes are very expensive in javascript

const arrThree = [1, 2, 3, 4, 5]
console.log(arrThree[2]);


// Optimized order

// SMI > DOUBLE > PACKED // Continious
// H_SMI > H_DOUBLE > H_PACKED // Holey

const arrFour = new Array(3)
// Just 3 holes // HOLEY_SMI_ELEMENTS
arrFour[0] = '1' // HOLEY_ELEMENTS
arrFour[1] = '2' // HOLEY_ELEMENTS
arrFour[2] = '3' // HOLEY_ELEMENTS


// Better approach

const arrFive = []
arrFive.push('1') // PACKED_ELEMENTS
arrFive.push('2') // PACKED_ELEMENTS
arrFive.push('3') // PACKED_ELEMENTS


const arrSix = [1, 2, 3, 4, 5] // SMI_ELEMENTS
arrSix.push(NaN) // PACKED_DOUBLE
arrSix.push(Infinity) // DOUBLE

// It is recommended to use methods like: for, foreach, forof, forin, etc