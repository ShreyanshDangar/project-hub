// ============================================================================// ============================================================================
// PROBLEM SOLVING JS 1 TO 200 - ALL QUESTIONS IN ONE FILE
// ============================================================================


// Q1. Even or Odd
// let num = 4;
// if (num % 2 === 0) {
//   console.log("It's an even number");
// } else {
//   console.log("It's an odd number");
// }


// Q2. Maximum of Two Numbers
// let a = 5;
// let b = 9;
// if (a > b) {
//   console.log(`The larger number is ${a}`);
// } else {
//   console.log(`The larger number is ${b}`);
// }


// Q3. Maximum of Three Numbers
// let x = 3;
// let y = 7;
// let z = 5;
// let max = x;
// if (y > max) max = y;
// if (z > max) max = z;
// console.log(`The largest of the three is ${max}`);


// Q4. Positive, Negative, or Zero
// let value = 8;
// if (value > 0) {
//   console.log("That's a positive number");
// } else if (value < 0) {
//   console.log("That's a negative number");
// } else {
//   console.log("That's zero");
// }


// Q5. Age Group
// let age = 8;
// if (age >= 0 && age <= 12) {
//   console.log("Classification: Child");
// } else if (age >= 13 && age <= 19) {
//   console.log("Classification: Teenager");
// } else if (age >= 20) {
//   console.log("Classification: Adult");
// } else {
//   console.log("Invalid age");
// }


// Q6. Grade Calculator
// let marks = 92;
// if (marks >= 90 && marks <= 100) {
//   console.log("Your grade: A");
// } else if (marks >= 80) {
//   console.log("Your grade: B");
// } else if (marks >= 70) {
//   console.log("Your grade: C");
// } else if (marks >= 60) {
//   console.log("Your grade: D");
// } else if (marks >= 0) {
//   console.log("Your grade: F");
// } else {
//   console.log("Invalid marks");
// }


// Q7. Divisible by 5
// let digit = 10;
// if (digit % 5 === 0) {
//   console.log("Yes, divisible by 5");
// } else {
//   console.log("No, not divisible by 5");
// }


// Q8. Divisible by 3 and 5
// let total = 15;
// if (total % 3 === 0 && total % 5 === 0) {
//   console.log("Divisible by both 3 and 5");
// } else {
//   console.log("Not divisible by both");
// }


// Q9. Leap Year
// let year = 2020;
// let isLeap = (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
// if (isLeap) {
//   console.log(`${year} is a leap year`);
// } else {
//   console.log(`${year} is not a leap year`);
// }


// Q10. In Range 10–50
// let check = 25;
// if (check >= 10 && check <= 50) {
//   console.log("Within range [10-50]");
// } else {
//   console.log("Out of range");
// }


// ============================================================================
// LOOPS & SEQUENCES (Q11-Q20)
// ============================================================================

// Q11. Print 1 to 10
// let sequence = [];
// for (let i = 1; i <= 10; i++) {
//   sequence.push(i);
// }
// console.log(sequence.join(" "));


// Q12. Print 1 to N
// let n = 5;
// let result = [];
// for (let i = 1; i <= n; i++) {
//   result.push(i);
// }
// console.log(result.join(" "));


// Q13. Even Numbers 1 to N
// let limit = 10;
// let evens = [];
// for (let i = 2; i <= limit; i += 2) {
//   evens.push(i);
// }
// console.log(evens.join(" "));


// Q14. Odd Numbers 1 to N
// let range = 10;
// let odds = [];
// for (let i = 1; i <= range; i += 2) {
//   odds.push(i);
// }
// console.log(odds.join(" "));


// Q15. Sum 1 to N
// let n2 = 5;
// let sum = 0;
// for (let i = 1; i <= n2; i++) {
//   sum += i;
// }
// console.log(`Sum from 1 to ${n2}: ${sum}`);


// Q16. Product 1 to N (Factorial)
// let n3 = 5;
// let product = 1;
// for (let i = 1; i <= n3; i++) {
//   product *= i;
// }
// console.log(`Factorial of ${n3}: ${product}`);


// Q17. Multiplication Table
// let base = 5;
// let table = [];
// for (let i = 1; i <= 10; i++) {
//   table.push(base * i);
// }
// console.log(table.join(" "));


// Q18. Count Numbers Divisible by 3
// let limit2 = 10;
// let count = 0;
// for (let i = 3; i <= limit2; i += 3) {
//   count++;
// }
// console.log(`Count: ${count}`);


// Q19. Factorial
// let n4 = 5;
// let fact = 1;
// for (let i = 2; i <= n4; i++) {
//   fact *= i;
// }
// console.log(`${n4}! = ${fact}`);


// Q20. First N Multiples of 7
// let n5 = 5;
// let multiples = [];
// for (let i = 1; i <= n5; i++) {
//   multiples.push(7 * i);
// }
// console.log(multiples.join(" "));


// ============================================================================
// DIGIT & NUMBER OPERATIONS (Q21-Q30)
// ============================================================================

// Q21. Count Digits
// let num2 = -98;
// let temp = Math.abs(num2);
// let digits = 0;
// if (temp === 0) {
//   digits = 1;
// } else {
//   while (temp > 0) {
//     digits++;
//     temp = Math.floor(temp / 10);
//   }
// }
// console.log(`Total digits: ${digits}`);


// Q22. Sum of Digits
// let num3 = 505;
// let work = Math.abs(num3);
// let digitSum = 0;
// while (work > 0) {
//   digitSum += work % 10;
//   work = Math.floor(work / 10);
// }
// console.log(`Digit sum: ${digitSum}`);


// Q23. Product of Digits
// let num4 = 123;
// let temp2 = Math.abs(num4);
// let digitProd = 1;
// if (temp2 === 0) {
//   digitProd = 0;
// } else {
//   while (temp2 > 0) {
//     digitProd *= temp2 % 10;
//     temp2 = Math.floor(temp2 / 10);
//   }
// }
// console.log(`Digit product: ${digitProd}`);


// Q24. Reverse a Number
// let num5 = 100;
// let sign = 1;
// if (num5 < 0) {
//   sign = -1;
//   num5 = -num5;
// }
// let reversed = 0;
// while (num5 > 0) {
//   reversed = reversed * 10 + (num5 % 10);
//   num5 = Math.floor(num5 / 10);
// }
// reversed *= sign;
// console.log(`Reversed: ${reversed}`);


// Q25. Palindrome Number
// let num6 = 121;
// let original = num6;
// let signPal = 1;
// if (num6 < 0) {
//   signPal = -1;
//   num6 = -num6;
// }
// let mirror = num6;
// let mirrorRev = 0;
// while (mirror > 0) {
//   mirrorRev = mirrorRev * 10 + (mirror % 10);
//   mirror = Math.floor(mirror / 10);
// }
// let isPal = mirrorRev === original && signPal === 1;
// console.log(`Palindrome: ${isPal}`);


// Q26. Prime Number
// let num7 = 31;
// let isPrime = true;
// if (num7 <= 1) {
//   isPrime = false;
// } else {
//   for (let i = 2; i * i <= num7; i++) {
//     if (num7 % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
// }
// console.log(`Is prime: ${isPrime}`);


// Q27. All Primes up to N
// let limit3 = 100;
// let primes = [];
// for (let n = 2; n <= limit3; n++) {
//   let prime = true;
//   for (let i = 2; i * i <= n; i++) {
//     if (n % i === 0) {
//       prime = false;
//       break;
//     }
//   }
//   if (prime) {
//     primes.push(n);
//   }
// }
// console.log(primes.join(" "));


// Q28. Fibonacci Sequence
// let terms = 7;
// let prev = 0;
// let curr = 1;
// let fib = [];
// for (let i = 1; i <= terms; i++) {
//   fib.push(prev);
//   let next = prev + curr;
//   prev = curr;
//   curr = next;
// }
// console.log(fib.join(" "));


// Q29. GCD of Two Numbers
// let numA = 12;
// let numB = 18;
// let gcd = 1;
// let minVal = numA < numB ? numA : numB;
// for (let i = 1; i <= minVal; i++) {
//   if (numA % i === 0 && numB % i === 0) {
//     gcd = i;
//   }
// }
// console.log(`GCD: ${gcd}`);


// Q30. LCM of Two Numbers
// let numX = 4;
// let numY = 6;
// let start = numX > numY ? numX : numY;
// let lcm = start;
// while (true) {
//   if (lcm % numX === 0 && lcm % numY === 0) {
//     break;
//   }
//   lcm++;
// }
// console.log(`LCM: ${lcm}`);


// ============================================================================
// STRING OPERATIONS (Q31-Q50)
// ============================================================================

// Q31. Length of String
// function lengthOfString(str) {
//   return str.length;
// }
// console.log(lengthOfString("hello"));
// console.log(lengthOfString(""));
// console.log(lengthOfString("JavaScript"));


// Q32. Print Each Character on New Line
// function printChars(str) {
//   for (let char of str) {
//     console.log(char);
//   }
// }
// printChars("cat");
// printChars("hi");


// Q33. Count Vowels (case-insensitive)
// function countVowels(str) {
//   let vowels = "aeiou";
//   let count = 0;
//   for (let char of str.toLowerCase()) {
//     if (vowels.includes(char))
//       count++;
//   }
//   return count;
// }
// console.log(countVowels("hello"));
// console.log(countVowels("JAVASCRIPT"));
// console.log(countVowels("sky"));


// Q34. Count Consonants (ignore spaces, case-insensitive)
// function countConsonants(str) {
//   let vowels = "aeiou";
//   let count = 0;
//   for (let char of str.toLowerCase()) {
//     if (/[a-z]/.test(char) && !vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countConsonants("hello"));
// console.log(countConsonants("abc"));
// console.log(countConsonants("a e i"));


// Q35. To Uppercase
// function toUpper(str) {
//   return str.toUpperCase();
// }
// console.log(toUpper("hello"));
// console.log(toUpper("Js"));
// console.log(toUpper("123abc"));


// Q36. To Lowercase
// function toLower(str) {
//   return str.toLowerCase();
// }
// console.log(toLower("HELLO"));
// console.log(toLower("Js"));
// console.log(toLower("123ABC"));


// Q37. Reverse a String
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverseString("hello"));
// console.log(reverseString("abc"));
// console.log(reverseString("a"));


// Q38. Palindrome String
// function isPalindrome(str) {
//   let reversed = str.split("").reverse().join("");
//   return str === reversed;
// }
// console.log(isPalindrome("madam"));
// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("hello"));


// Q39. Count Occurrences of 'a' (case-insensitive)
// function countA(str) {
//   let count = 0;
//   for (let char of str.toLowerCase()) {
//     if (char === 'a') count++;
//   }
//   return count;
// }
// console.log(countA("banana"));
// console.log(countA("Apple"));
// console.log(countA("xyz"));


// Q40. Remove All Spaces
// function removeSpacesManual(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== " ") {
//       result += str[i];
//     }
//   }
//   return result;
// }
// console.log(removeSpacesManual("hello world"));
// console.log(removeSpacesManual("  a b  c  "));
// console.log(removeSpacesManual("no_spaces"));


// Q41. Count Words
// function countWordsEasy(sentence) {
//   return sentence.trim().split(" ").filter(word => word !== "").length;
// }
// console.log(countWordsEasy("Hello world"));
// console.log(countWordsEasy("JavaScript is fun"));
// console.log(countWordsEasy("  this   is   spaced  "));


// Q42. Replace 'a' with 'e'
// function replaceAWithE(str) {
//   return str.replaceAll('a', 'e');
// }
// console.log(replaceAWithE("banana"));
// console.log(replaceAWithE("apple"));
// console.log(replaceAWithE("cat"));


// Q43. Contains Character
// function containsChar(str, ch) {
//   return str.includes(ch);
// }
// console.log(containsChar("hello", "e"));
// console.log(containsChar("hello", "a"));
// console.log(containsChar("JavaScript", "S"));


// Q44. Compare Strings
// function compareStrings(str1, str2) {
//   return str1 === str2;
// }
// console.log(compareStrings("hello", "hello"));
// console.log(compareStrings("Hello", "hello"));
// console.log(compareStrings("js", "js "));


// Q45. Count Digits in String
// function countDigits(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] >= '0' && str[i] <= '9') {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countDigits("abc123"));
// console.log(countDigits("2025 year"));
// console.log(countDigits("no digits"));


// Q46. Count Uppercase
// function countUppercase(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] >= 'A' && str[i] <= 'Z') {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countUppercase("HeLLo"));
// console.log(countUppercase("javascript"));
// console.log(countUppercase("JS 101"));


// Q47. Count Lowercase
// function countLowercase(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] >= 'a' && str[i] <= 'z') {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countLowercase("HeLLo"));
// console.log(countLowercase("JAVASCRIPT"));
// console.log(countLowercase("Js 101"));


// Q48. Remove Vowels
// function removeVowels(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     let ch = str[i].toLowerCase();
//     if (!(ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u')) {
//       result += str[i];
//     }
//   }
//   return result;
// }
// console.log(removeVowels("hello"));
// console.log(removeVowels("JavaScript"));
// console.log(removeVowels("AEIOU"));


// Q49. Remove Digits
// function removeDigits(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     if (!(str[i] >= '0' && str[i] <= '9')) {
//       result += str[i];
//     }
//   }
//   return result;
// }
// console.log(removeDigits("abc123"));
// console.log(removeDigits("Js 101 course"));
// console.log(removeDigits("2025"));


// Q50. Toggle Case
// function toggleCase(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     let ch = str[i];
//     if (ch >= 'a' && ch <= 'z') {
//       result += ch.toUpperCase();
//     } else if (ch >= 'A' && ch <= 'Z') {
//       result += ch.toLowerCase();
//     } else {
//       result += ch;
//     }
//   }
//   return result;
// }
// console.log(toggleCase("HeLLo"));
// console.log(toggleCase("abcDEF"));
// console.log(toggleCase("Js 101"));


// ============================================================================
// ARRAY OPERATIONS - BASIC (Q51-Q80)
// ============================================================================

// Q51. Print Array Elements
// function printElements(arr) {
//   console.log(arr.join(" "));
// }
// printElements([1, 2, 3]);
// printElements(["a", "b", "c"]);
// printElements([]);


// Q52. Sum Array
// function sumArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log(sumArray([1, 2, 3]));
// console.log(sumArray([5, -2, 7]));
// console.log(sumArray([]));


// Q53. Find Max
// function findMax(arr) {
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(findMax([3, 7, 2, 9]));
// console.log(findMax([-5, -2, -10]));
// console.log(findMax([42]));


// Q54. Find Min
// function findMin(arr) {
//   let min = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   return min;
// }
// console.log(findMin([3, 7, 2, 9]));
// console.log(findMin([-5, -2, -10]));
// console.log(findMin([42]));


// Q55. Count Even Numbers
// function countEvenNumbers(arr) {
//   let count = 0;
//   for (let num of arr) {
//     if (num % 2 === 0) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countEvenNumbers([1, 2, 3, 4, 5, 6]));
// console.log(countEvenNumbers([1, 3, 5]));
// console.log(countEvenNumbers([2, 4, 8]));


// Q56. Count Odd Numbers
// function countOddNumbers(arr) {
//   let count = 0;
//   for (let num of arr) {
//     if (num % 2 !== 0) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countOddNumbers([1, 2, 3, 4, 5]));
// console.log(countOddNumbers([2, 4, 6]));
// console.log(countOddNumbers([7, 9]));


// Q57. Print Positive Numbers
// function printPositiveNumbers(arr) {
//   let positives = [];
//   for (let num of arr) {
//     if (num > 0) {
//       positives.push(num);
//     }
//   }
//   console.log(positives.join(" "));
// }
// printPositiveNumbers([-1, 0, 5, 3, -2]);
// printPositiveNumbers([1, 2, 3]);
// printPositiveNumbers([-5, -2]);


// Q58. Print Negative Numbers
// function printNegativeNumbers(arr) {
//   let negatives = [];
//   for (let num of arr) {
//     if (num < 0) {
//       negatives.push(num);
//     }
//   }
//   console.log(negatives.join(" "));
// }
// printNegativeNumbers([-1, 0, 5, 3, -2]);
// printNegativeNumbers([1, 2, 3]);
// printNegativeNumbers([-5, -2]);


// Q59. Print Greater Than 10
// function printGreaterThan10(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 10) {
//       console.log(arr[i]);
//     }
//   }
// }
// printGreaterThan10([5, 12, 7, 20, 3]);
// printGreaterThan10([10, 11, 9]);
// printGreaterThan10([1, 2, 3]);


// Q60. Average of Array
// function averageArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   let avg = sum / arr.length;
//   console.log("Sum =", sum, "→ Average =", avg);
// }
// averageArray([1, 2, 3, 4]);
// averageArray([5, 15]);
// averageArray([7]);


// Q61. Double Each Element
// function doubleEachElement(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(arr[i] * 2);
//   }
//   return result;
// }
// console.log(doubleEachElement([1, 2, 3]));
// console.log(doubleEachElement([5, -2]));
// console.log(doubleEachElement([]));


// Q62. Square Each Element
// function squareEachElement(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(arr[i] * arr[i]);
//   }
//   return result;
// }
// console.log(squareEachElement([1, 2, 3]));
// console.log(squareEachElement([-2, 4]));
// console.log(squareEachElement([0]));


// Q63. Reverse Array
// function reverseArray(arr) {
//   let result = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     result.push(arr[i]);
//   }
//   return result;
// }
// console.log(reverseArray([1, 2, 3]));
// console.log(reverseArray(["a", "b", "c"]));
// console.log(reverseArray([7]));


// Q64. Copy Array
// function copyArray(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(arr[i]);
//   }
//   return result;
// }
// console.log(copyArray([1, 2, 3]));
// console.log(copyArray([]));
// console.log(copyArray(["x", "y"]));


// Q65. Contains Value
// function containsValue(arr, value) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === value) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(containsValue([1, 2, 3], 2));
// console.log(containsValue([1, 2, 3], 5));
// console.log(containsValue([], 1));


// Q66. Find Index
// function findIndex(arr, value) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === value) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(findIndex([10, 20, 30], 20));
// console.log(findIndex([10, 20, 30], 40));
// console.log(findIndex(["a", "b"], "b"));


// Q67. Frequency of Value
// function frequencyOfValue(arr, value) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === value) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(frequencyOfValue([1, 2, 2, 3, 2], 2));
// console.log(frequencyOfValue([5, 5, 5], 5));
// console.log(frequencyOfValue([1, 2, 3], 4));


// Q68. Is Sorted
// function isSorted(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < arr[i - 1]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isSorted([1, 2, 3, 4]));
// console.log(isSorted([1, 2, 2, 3]));
// console.log(isSorted([3, 2, 1]));


// Q69. Second Largest
// function secondLargest(arr) {
//   let largest = -Infinity;
//   let second = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       second = largest;
//       largest = arr[i];
//     } else if (arr[i] > second && arr[i] !== largest) {
//       second = arr[i];
//     }
//   }
//   return second;
// }
// console.log(secondLargest([10, 5, 8, 20]));
// console.log(secondLargest([3, 1, 2]));
// console.log(secondLargest([100, 50]));


// Q70. Second Smallest
// function secondSmallest(arr) {
//   let smallest = Infinity;
//   let second = Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//       second = smallest;
//       smallest = arr[i];
//     } else if (arr[i] < second && arr[i] !== smallest) {
//       second = arr[i];
//     }
//   }
//   return second;
// }
// console.log(secondSmallest([10, 5, 8, 20]));
// console.log(secondSmallest([3, 1, 2]));
// console.log(secondSmallest([100, 50]));


// Q71. Remove Even
// function removeEven(arr) {
//   return arr.filter(num => num % 2 !== 0);
// }
// console.log(removeEven([1, 2, 3, 4, 5]));
// console.log(removeEven([2, 4, 6]));
// console.log(removeEven([1, 3, 5]));


// Q72. Remove Duplicates
// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }
// console.log(removeDuplicates([1, 2, 2, 3, 3, 3]));
// console.log(removeDuplicates(["a", "a", "b"]));
// console.log(removeDuplicates([]));


// Q73. Concatenate Arrays
// function concatenateArrays(arr1, arr2) {
//   return arr1.concat(arr2);
// }
// console.log(concatenateArrays([1, 2], [3, 4]));
// console.log(concatenateArrays([], [5, 6]));
// console.log(concatenateArrays(["a"], ["b", "c"]));


// Q74. Intersection
// function intersection(arr1, arr2) {
//   return [...new Set(arr1.filter(item => arr2.includes(item)))];
// }
// console.log(intersection([1, 2, 3, 4], [3, 4, 5]));
// console.log(intersection([1, 2], [3, 4]));
// console.log(intersection([1, 1, 2], [1, 2, 2]));


// Q75. Rotate Right
// function rotateRight(arr) {
//   if (arr.length === 0) return [];
//   return [arr[arr.length - 1], ...arr.slice(0, arr.length - 1)];
// }
// console.log(rotateRight([1, 2, 3, 4]));
// console.log(rotateRight([10]));
// console.log(rotateRight([]));


// Q76. Rotate Left
// function rotateLeft(arr) {
//   if (arr.length === 0) return [];
//   return [...arr.slice(1), arr[0]];
// }
// console.log(rotateLeft([1, 2, 3, 4]));
// console.log(rotateLeft([10]));
// console.log(rotateLeft([]));


// Q77. Count Greater Than Average
// function countGreaterThanAverage(arr) {
//   if (arr.length === 0) return 0;
//   const avg = arr.reduce((a, b) => a + b, 0) / arr.length;
//   return arr.filter(num => num > avg).length;
// }
// console.log(countGreaterThanAverage([1, 2, 3, 4, 5]));
// console.log(countGreaterThanAverage([10, 10, 10]));
// console.log(countGreaterThanAverage([5, 15]));


// Q78. Find Extremes
// function findExtremes(arr) {
//   const positives = arr.filter(n => n > 0);
//   const negatives = arr.filter(n => n < 0);
//   return {
//     largestPositive: positives.length ? Math.max(...positives) : null,
//     smallestNegative: negatives.length ? Math.min(...negatives) : null
//   };
// }
// console.log(findExtremes([-5, -1, 3, 7, -2]));
// console.log(findExtremes([1, 2, 3]));
// console.log(findExtremes([-3, -1]));


// Q79. Count Binary
// function countBinary(arr) {
//   let zeros = 0, ones = 0;
//   for (let num of arr) {
//     if (num === 0) zeros++;
//     else if (num === 1) ones++;
//   }
//   return { zeros, ones };
// }
// console.log(countBinary([0, 1, 0, 1, 1]));
// console.log(countBinary([1, 1, 1]));
// console.log(countBinary([0, 0]));


// Q80. Separate Even Odd
// function separateEvenOdd(arr) {
//   const evens = arr.filter(n => n % 2 === 0);
//   const odds = arr.filter(n => n % 2 !== 0);
//   return { evens, odds };
// }
// console.log(separateEvenOdd([1, 2, 3, 4, 5]));
// console.log(separateEvenOdd([2, 4, 6]));
// console.log(separateEvenOdd([1, 3, 5]));


// ============================================================================
// PATTERNS & MATRICES (Q81-Q90)
// ============================================================================

// Q81. Print Square Pattern
// function printSquarePattern(n) {
//   for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < n; j++) {
//       row += "* ";
//     }
//     console.log(row.trim());
//   }
// }
// printSquarePattern(2);
// printSquarePattern(3);
// printSquarePattern(4);


// Q82. Print Triangle Pattern
// function printTrianglePattern(n) {
//   for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += "* ";
//     }
//     console.log(row.trim());
//   }
// }
// printTrianglePattern(3);
// printTrianglePattern(4);


// Q83. Print Number Triangle
// function printNumberTriangle(n) {
//   for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += j + " ";
//     }
//     console.log(row.trim());
//   }
// }
// printNumberTriangle(3);
// printNumberTriangle(4);


// Q84. Print Repeat Number Triangle
// function printRepeatNumberTriangle(n) {
//   for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += i + " ";
//     }
//     console.log(row.trim());
//   }
// }
// printRepeatNumberTriangle(3);
// printRepeatNumberTriangle(4);


// Q85. Print Multiplication Tables
// function printMultiplicationTables() {
//   for (let i = 1; i <= 10; i++) {
//     let row = [];
//     for (let j = 1; j <= 10; j++) {
//       row.push(i * j);
//     }
//     console.log(`Table of ${i}: ${row.join(" ")}`);
//   }
// }
// printMultiplicationTables();


// Q86. Sum of Rows
// function sumOfRows(matrix) {
//   let result = [];
//   for (let i = 0; i < matrix.length; i++) {
//     let currentRow = matrix[i];
//     let sum = 0;
//     for (let j = 0; j < currentRow.length; j++) {
//       sum += currentRow[j];
//     }
//     result.push(sum);
//   }
//   return result;
// }
// console.log(sumOfRows([[1, 2, 3], [4, 5, 6]]));
// console.log(sumOfRows([[7, 3], [0, 0], [5, 5]]));
// console.log(sumOfRows([]));


// Q87. Is Perfect Square
// function isPerfectSquare(n) {
//   if (n < 0) return false;
//   let sqrt = Math.sqrt(n);
//   return sqrt === Math.floor(sqrt);
// }
// console.log(isPerfectSquare(16));
// console.log(isPerfectSquare(15));
// console.log(isPerfectSquare(1));
// console.log(isPerfectSquare(25));


// Q88. Is Armstrong Number
// function isArmstrong(num) {
//   let temp = num;
//   let sum = 0;
//   while (temp > 0) {
//     let digit = temp % 10;
//     sum += (digit * digit * digit);
//     temp = Math.floor(temp / 10);
//   }
//   return sum === num;
// }
// console.log(isArmstrong(153));
// console.log(isArmstrong(370));
// console.log(isArmstrong(123));


// Q89. String Lengths
// function stringLengths(arr) {
//   let lengths = [];
//   for (let i = 0; i < arr.length; i++) {
//     lengths.push(arr[i].length);
//   }
//   return lengths;
// }
// console.log(stringLengths(["hi", "hello", "a"]));
// console.log(stringLengths(["JS", "is", "cool"]));
// console.log(stringLengths([]));


// Q90. Find Longest String
// function findLongestString(arr) {
//   if (arr.length === 0) return "";
//   let longest = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i].length > longest.length) {
//       longest = arr[i];
//     }
//   }
//   return longest;
// }
// console.log(findLongestString(["hi", "hello", "hey"]));
// console.log(findLongestString(["a", "ab", "abc"]));
// console.log(findLongestString(["same", "size"]));


// ============================================================================
// FREQUENCY & ANALYSIS (Q91-Q100)
// ============================================================================

// Q91. Count Number Frequency
// function countNumberFrequency(arr) {
//   let frequency = {};
//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     if (frequency[num]) {
//       frequency[num]++;
//     } else {
//       frequency[num] = 1;
//     }
//   }
//   return frequency;
// }
// console.log(countNumberFrequency([1, 2, 2, 3]));
// console.log(countNumberFrequency([5, 5, 5]));
// console.log(countNumberFrequency([]));


// Q92. Find Most Frequent Number
// function findMostFrequentNumber(arr) {
//   if (arr.length === 0) return null;
//   let frequency = {};
//   let maxCount = 0;
//   let mostFrequent = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     if (frequency[num]) {
//       frequency[num]++;
//     } else {
//       frequency[num] = 1;
//     }
//     if (frequency[num] > maxCount) {
//       maxCount = frequency[num];
//       mostFrequent = num;
//     }
//   }
//   return mostFrequent;
// }
// console.log(findMostFrequentNumber([1, 2, 2, 3]));
// console.log(findMostFrequentNumber([4, 4, 1, 1, 4]));
// console.log(findMostFrequentNumber([7]));


// Q93. Count Character Frequency
// function countCharacterFrequency(str) {
//   let frequency = {};
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (frequency[char]) {
//       frequency[char]++;
//     } else {
//       frequency[char] = 1;
//     }
//   }
//   return frequency;
// }
// console.log(countCharacterFrequency("aab"));
// console.log(countCharacterFrequency("hello"));
// console.log(countCharacterFrequency(""));


// Q94. Get Top Student
// function getTopStudent(students) {
//   if (students.length === 0) return null;
//   let topStudent = students[0];
//   for (let i = 1; i < students.length; i++) {
//     if (students[i].marks > topStudent.marks) {
//       topStudent = students[i];
//     }
//   }
//   return topStudent.name;
// }
// console.log(getTopStudent([{name: "A", marks: 50}, {name: "B", marks: 80}, {name: "C", marks: 70}]));
// console.log(getTopStudent([{name: "Neel", marks: 95}]));


// Q95. Calculate Total Cost
// function calculateTotalCost(prices) {
//   let total = 0;
//   for (let product in prices) {
//     total += prices[product];
//   }
//   return total;
// }
// console.log(calculateTotalCost({apple: 50, banana: 20, mango: 30}));
// console.log(calculateTotalCost({pen: 10, pencil: 5}));
// console.log(calculateTotalCost({}));


// Q96. Calculate Average Marks
// function calculateAverageMarks(marksObj) {
//   let total = 0;
//   let count = 0;
//   for (let subject in marksObj) {
//     total += marksObj[subject];
//     count++;
//   }
//   if (count === 0) return 0;
//   return total / count;
// }
// console.log(calculateAverageMarks({math: 80, science: 90, english: 70}));
// console.log(calculateAverageMarks({only: 100}));
// console.log(calculateAverageMarks({}));


// Q97. Get Object Keys
// function getObjectKeys(obj) {
//   let keys = [];
//   for (let key in obj) {
//     keys.push(key);
//   }
//   return keys;
// }
// console.log(getObjectKeys({a: 1, b: 2, c: 3}));
// console.log(getObjectKeys({name: "Neel", age: 25}));
// console.log(getObjectKeys({}));


// Q98. Get Object Values
// function getObjectValues(obj) {
//   let values = [];
//   for (let key in obj) {
//     values.push(obj[key]);
//   }
//   return values;
// }
// console.log(getObjectValues({a: 1, b: 2, c: 3}));
// console.log(getObjectValues({name: "Neel", age: 25}));
// console.log(getObjectValues({}));


// Q99. Count Properties
// function countProperties(obj) {
//   let count = 0;
//   for (let key in obj) {
//     count++;
//   }
//   return count;
// }
// console.log(countProperties({a: 1, b: 2, c: 3}));
// console.log(countProperties({}));
// console.log(countProperties({x: 10}));


// Q100. Filter Adults
// function filterAdults(people) {
//   let adults = [];
//   for (let i = 0; i < people.length; i++) {
//     if (people[i].age > 18) {
//       adults.push(people[i]);
//     }
//   }
//   return adults;
// }
// console.log(filterAdults([{name: "A", age: 17}, {name: "B", age: 20}, {name: "C", age: 18}]));
// console.log(filterAdults([{name: "Neel", age: 25}]));
// console.log(filterAdults([{name: "Child", age: 10}]));


// ============================================================================
// BASIC FUNCTIONS (Q101-Q130)
// ============================================================================

// Q101. Square Number
// function squareNumber(n) {
//   return n * n;
// }
// console.log(squareNumber(2));
// console.log(squareNumber(-3));
// console.log(squareNumber(0));


// Q102. Sum Two Numbers
// function sumTwoNumbers(a, b) {
//   return a + b;
// }
// console.log(sumTwoNumbers(5, 7));
// console.log(sumTwoNumbers(-2, 10));
// console.log(sumTwoNumbers(0, 0));


// Q103. Greet By Name
// function greetByName(name) {
//   return "Hello, " + name + "!";
// }
// console.log(greetByName("Neel"));
// console.log(greetByName("Arjun"));
// console.log(greetByName(""));


// Q104. Check Even
// function checkEven(n) {
//   return n % 2 === 0;
// }
// console.log(checkEven(4));
// console.log(checkEven(7));
// console.log(checkEven(0));


// Q105. Check Odd
// function checkOdd(n) {
//   return n % 2 !== 0;
// }
// console.log(checkOdd(5));
// console.log(checkOdd(8));
// console.log(checkOdd(0));


// Q106. Is Between 1 And 100
// function isBetween1And100(n) {
//   return n >= 1 && n <= 100;
// }
// console.log(isBetween1And100(50));
// console.log(isBetween1And100(1));
// console.log(isBetween1And100(150));


// Q107. Is First Greater
// function isFirstGreater(a, b) {
//   return a > b;
// }
// console.log(isFirstGreater(10, 5));
// console.log(isFirstGreater(3, 9));
// console.log(isFirstGreater(7, 7));


// Q108. Is String Length Greater Than 5
// function isStringLengthGreaterThan5(str) {
//   return str.length > 5;
// }
// console.log(isStringLengthGreaterThan5("hello"));
// console.log(isStringLengthGreaterThan5("javascript"));
// console.log(isStringLengthGreaterThan5(""));


// Q109. Get First Char
// function getFirstChar(str) {
//   return str[0];
// }
// console.log(getFirstChar("hello"));
// console.log(getFirstChar("A"));
// console.log(getFirstChar("js"));


// Q110. Get Last Char
// function getLastChar(str) {
//   return str[str.length - 1];
// }
// console.log(getLastChar("hello"));
// console.log(getLastChar("A"));
// console.log(getLastChar("js"));


// Q111. Get Longer String
// function getLongerString(str1, str2) {
//   if (str1.length >= str2.length) {
//     return str1;
//   } else {
//     return str2;
//   }
// }
// console.log(getLongerString("hi", "hello"));
// console.log(getLongerString("javascript", "js"));
// console.log(getLongerString("abc", "xyz"));


// Q112. Average of Three
// function averageOfThree(a, b, c) {
//   return (a + b + c) / 3;
// }
// console.log(averageOfThree(3, 6, 9));
// console.log(averageOfThree(0, 0, 0));
// console.log(averageOfThree(10, 20, 25));


// Q113. Get Sign
// function getSign(n) {
//   if (n > 0) return "positive";
//   else if (n < 0) return "negative";
//   else return "zero";
// }
// console.log(getSign(5));
// console.log(getSign(-3));
// console.log(getSign(0));


// Q114. Can Vote
// function canVote(age) {
//   return age >= 18;
// }
// console.log(canVote(17));
// console.log(canVote(18));
// console.log(canVote(25));


// Q115. Hours To Minutes
// function hoursToMinutes(hours) {
//   return hours * 60;
// }
// console.log(hoursToMinutes(1));
// console.log(hoursToMinutes(2.5));
// console.log(hoursToMinutes(0));


// Q116. Minutes To Seconds
// function minutesToSeconds(minutes) {
//   return minutes * 60;
// }
// console.log(minutesToSeconds(1));
// console.log(minutesToSeconds(5));
// console.log(minutesToSeconds(0));


// Q117. Celsius To Fahrenheit
// function celsiusToFahrenheit(c) {
//   return (c * 9/5) + 32;
// }
// console.log(celsiusToFahrenheit(0));
// console.log(celsiusToFahrenheit(25));
// console.log(celsiusToFahrenheit(100));


// Q118. Fahrenheit To Celsius
// function fahrenheitToCelsius(f) {
//   return (f - 32) * 5/9;
// }
// console.log(fahrenheitToCelsius(32));
// console.log(fahrenheitToCelsius(212));
// console.log(fahrenheitToCelsius(98.6));


// Q119. Area of Triangle
// function areaOfTriangle(base, height) {
//   return 0.5 * base * height;
// }
// console.log(areaOfTriangle(10, 5));
// console.log(areaOfTriangle(3, 4));
// console.log(areaOfTriangle(0, 10));


// Q120. Area of Circle
// function areaOfCircle(r) {
//   return Math.PI * r * r;
// }
// console.log(areaOfCircle(1));
// console.log(areaOfCircle(3));
// console.log(areaOfCircle(0));


// Q121. Is Multiple of 10
// function isMultipleOf10(n) {
//   return n % 10 === 0;
// }
// console.log(isMultipleOf10(20));
// console.log(isMultipleOf10(15));
// console.log(isMultipleOf10(0));


// Q122. Min of Two
// function minOfTwo(a, b) {
//   if (a < b) return a;
//   return b;
// }
// console.log(minOfTwo(5, 9));
// console.log(minOfTwo(-3, 4));
// console.log(minOfTwo(7, 7));


// Q123. Min of Three
// function minOfThree(a, b, c) {
//   let min = a;
//   if (b < min) min = b;
//   if (c < min) min = c;
//   return min;
// }
// console.log(minOfThree(3, 7, 5));
// console.log(minOfThree(-1, -5, -3));
// console.log(minOfThree(10, 10, 5));


// Q124. Print Down To One
// function printDownToOne(n) {
//   let result = "";
//   for (let i = n; i >= 1; i--) {
//     result += i + " ";
//   }
//   console.log(result.trim());
// }
// printDownToOne(5);
// printDownToOne(1);
// printDownToOne(3);


// Q125. Sum Even Numbers
// function sumEvenNumbers(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }
// console.log(sumEvenNumbers(6));
// console.log(sumEvenNumbers(5));
// console.log(sumEvenNumbers(1));


// Q126. Sum Odd Numbers
// function sumOddNumbers(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 !== 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }
// console.log(sumOddNumbers(5));
// console.log(sumOddNumbers(6));
// console.log(sumOddNumbers(1));


// Q127. Count Divisible By 2 Or 3
// function countDivisibleBy2Or3(n) {
//   let count = 0;
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 === 0 || i % 3 === 0) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countDivisibleBy2Or3(6));
// console.log(countDivisibleBy2Or3(10));
// console.log(countDivisibleBy2Or3(1));


// Q128. Count Divisible By 2 And 5
// function countDivisibleBy2And5(n) {
//   let count = 0;
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 === 0 && i % 5 === 0) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countDivisibleBy2And5(20));
// console.log(countDivisibleBy2And5(9));
// console.log(countDivisibleBy2And5(10));


// Q129. Is Perfect Number
// function isPerfectNumber(n) {
//   let sum = 0;
//   for (let i = 1; i < n; i++) {
//     if (n % i === 0) {
//       sum += i;
//     }
//   }
//   return sum === n;
// }
// console.log(isPerfectNumber(6));
// console.log(isPerfectNumber(28));
// console.log(isPerfectNumber(10));


// Q130. Are CoP Prime
// function areCoPrime(a, b) {
//   let gcd = 1;
//   let min = a < b ? a : b;
//   for (let i = 1; i <= min; i++) {
//     if (a % i === 0 && b % i === 0) {
//       gcd = i;
//     }
//   }
//   return gcd === 1;
// }
// console.log(areCoPrime(8, 15));
// console.log(areCoPrime(12, 18));
// console.log(areCoPrime(7, 9));


// ============================================================================
// DIGIT OPERATIONS ADVANCED (Q131-Q160)
// ============================================================================

// Q131. Get Largest Digit
// function getLargestDigit(n) {
//   let str = n.toString();
//   let max = 0;
//   for (let i = 0; i < str.length; i++) {
//     let digit = parseInt(str[i]);
//     if (digit > max) {
//       max = digit;
//     }
//   }
//   return max;
// }
// console.log(getLargestDigit(5823));
// console.log(getLargestDigit(709));
// console.log(getLargestDigit(4));


// Q132. Get Smallest Digit
// function getSmallestDigit(n) {
//   let str = n.toString();
//   let min = 9;
//   for (let i = 0; i < str.length; i++) {
//     let digit = parseInt(str[i]);
//     if (digit < min) {
//       min = digit;
//     }
//   }
//   return min;
// }
// console.log(getSmallestDigit(5823));
// console.log(getSmallestDigit(709));
// console.log(getSmallestDigit(4));


// Q133. Count Even Digits
// function countEvenDigits(n) {
//   let str = n.toString();
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (parseInt(str[i]) % 2 === 0) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countEvenDigits(1234));
// console.log(countEvenDigits(5050));
// console.log(countEvenDigits(1357));


// Q134. Count Odd Digits
// function countOddDigits(n) {
//   let str = n.toString();
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (parseInt(str[i]) % 2 !== 0) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countOddDigits(1234));
// console.log(countOddDigits(5050));
// console.log(countOddDigits(2468));


// Q135. Absolute Difference
// function absoluteDifference(a, b) {
//   let diff = a - b;
//   if (diff < 0) return -diff;
//   return diff;
// }
// console.log(absoluteDifference(10, 3));
// console.log(absoluteDifference(3, 10));
// console.log(absoluteDifference(-5, 5));


// Q136. Is Three Digit Number
// function isThreeDigitNumber(n) {
//   return n >= 100 && n <= 999;
// }
// console.log(isThreeDigitNumber(150));
// console.log(isThreeDigitNumber(99));
// console.log(isThreeDigitNumber(1000));

// Q137. Sum of Squares
// function sumOfSquares(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i * i;
//   }
//   return sum;
// }
// console.log(sumOfSquares(3));
// console.log(sumOfSquares(3));
// console.log(sumOfSquares(1));
// console.log(sumOfSquares(4));


// Q138. Sum of Cubes
// function sumOfCubes(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i * i * i;
//   }
//   return sum;
// }
// console.log(sumOfCubes(3));
// console.log(sumOfCubes(1));
// console.log(sumOfCubes(2));


// Q139. Is Harshad Number
// function isHarshadNumber(n) {
//   let str = n.toString();
//   let sum = 0;
//   for (let i = 0; i < str.length; i++) {
//     sum += parseInt(str[i]);
//   }
//   return n % sum === 0;
// }
// console.log(isHarshadNumber(18));
// console.log(isHarshadNumber(21));
// console.log(isHarshadNumber(19));


// Q140. Is Automorphic
// function isAutomorphic(n) {
//   let square = n * n;
//   let strNum = n.toString();
//   let strSquare = square.toString();
//   return strSquare.endsWith(strNum);
// }
// console.log(isAutomorphic(5));
// console.log(isAutomorphic(6));
// console.log(isAutomorphic(7));


// Q141. Get Middle Chars
// function getMiddleChars(str) {
//   let len = str.length;
//   let mid = Math.floor(len / 2);
//   if (len % 2 !== 0) {
//     return str[mid];
//   } else {
//     return str[mid - 1] + str[mid];
//   }
// }
// console.log(getMiddleChars("abc"));
// console.log(getMiddleChars("test"));
// console.log(getMiddleChars("A"));


// Q142. Starts With A
// function startsWithA(str) {
//   return str.toLowerCase().startsWith('a');
// }
// console.log(startsWithA("apple"));
// console.log(startsWithA("Apple"));
// console.log(startsWithA("banana"));


// Q143. Ends With Exclamation
// function endsWithExclamation(str) {
//   return str.endsWith('!');
// }
// console.log(endsWithExclamation("Hello!"));
// console.log(endsWithExclamation("Wow"));
// console.log(endsWithExclamation("Oh no!!"));


// Q144. Count Spaces
// function countSpaces(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === ' ') {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countSpaces("hello world"));
// console.log(countSpaces("a b c d"));
// console.log(countSpaces("nospace"));


// Q145. Trim Spaces
// function trimSpaces(str) {
//   return str.trim();
// }
// console.log(trimSpaces("  hello  "));
// console.log(trimSpaces("   js"));
// console.log(trimSpaces("world   "));


// Q146. Replace Question Marks
// function replaceQuestionMarks(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === '?') {
//       result += '!';
//     } else {
//       result += str[i];
//     }
//   }
//   return result;
// }
// console.log(replaceQuestionMarks("Are you ok?"));
// console.log(replaceQuestionMarks("???"));
// console.log(replaceQuestionMarks("No questions"));


// Q147. Join Strings
// function joinStrings(s1, s2) {
//   return s1 + " " + s2;
// }
// console.log(joinStrings("Hello", "World"));
// console.log(joinStrings("JavaScript", "Rocks"));
// console.log(joinStrings("Neel", ""));


// Q148. Get First Word
// function getFirstWord(sentence) {
//   let words = sentence.split(" ");
//   return words[0];
// }
// console.log(getFirstWord("Hello world"));
// console.log(getFirstWord("JavaScript is fun"));
// console.log(getFirstWord("SingleWord"));


// Q149. Get Last Word
// function getLastWord(sentence) {
//   let words = sentence.split(" ");
//   return words[words.length - 1];
// }
// console.log(getLastWord("Hello world"));
// console.log(getLastWord("JavaScript is fun"));
// console.log(getLastWord("SingleWord"));


// Q150. Get Longest Word Length
// function getLongestWordLength(sentence) {
//   let words = sentence.split(" ");
//   let maxLength = 0;
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > maxLength) {
//       maxLength = words[i].length;
//     }
//   }
//   return maxLength;
// }
// console.log(getLongestWordLength("I love coding"));
// console.log(getLongestWordLength("JavaScript is awesome"));
// console.log(getLongestWordLength("hi"));


// ============================================================================
// STRING ANALYSIS (Q151-Q170)
// ============================================================================

// Q151. Get Shortest Word
// function getShortestWord(sentence) {
//   let words = sentence.split(" ");
//   let shortest = words[0];
//   for (let i = 1; i < words.length; i++) {
//     if (words[i].length < shortest.length) {
//       shortest = words[i];
//     }
//   }
//   return shortest;
// }
// console.log(getShortestWord("I love coding"));
// console.log(getShortestWord("Java is fun"));
// console.log(getShortestWord("one two three"));


// Q152. Count "the"
// function countThe(sentence) {
//   let words = sentence.toLowerCase().split(" ");
//   let count = 0;
//   for (let i = 0; i < words.length; i++) {
//     if (words[i] === 'the') {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countThe("the cat and the dog"));
// console.log(countThe("There is the book"));
// console.log(countThe("no keyword here"));


// Q153. Contains Vowel
// function containsVowel(str) {
//   let vowels = "aeiouAEIOU";
//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(containsVowel("hello"));
// console.log(containsVowel("sky"));
// console.log(containsVowel("JAVASCRIPT"));


// Q154. Contains Only Digits
// function containsOnlyDigits(str) {
//   if (str.length === 0) return false;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] < '0' || str[i] > '9') {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(containsOnlyDigits("12345"));
// console.log(containsOnlyDigits("123a5"));
// console.log(containsOnlyDigits(""));


// Q155. Contains Only Letters
// function containsOnlyLetters(str) {
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase();
//     if (char < 'a' || char > 'z') {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(containsOnlyLetters("Hello"));
// console.log(containsOnlyLetters("Hello123"));
// console.log(containsOnlyLetters("hello world"));


// Q156. Double Characters
// function doubleCharacters(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     result += str[i] + str[i];
//   }
//   return result;
// }
// console.log(doubleCharacters("abc"));
// console.log(doubleCharacters("Hi"));
// console.log(doubleCharacters("A!"));


// Q157. Remove Special Chars
// function removeSpecialChars(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     let code = str.charCodeAt(i);
//     // 0-9 (48-57), A-Z (65-90), a-z (97-122)
//     if ((code >= 48 && code <= 57) ||
//         (code >= 65 && code <= 90) ||
//         (code >= 97 && code <= 122)) {
//       result += str[i];
//     }
//   }
//   return result;
// }
// console.log(removeSpecialChars("hello@123!"));
// console.log(removeSpecialChars("JS#is$cool"));
// console.log(removeSpecialChars("***"));


// Q158. Count Long Words
// function countLongWords(sentence) {
//   let words = sentence.split(" ");
//   let count = 0;
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length >= 5) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countLongWords("I love JavaScript coding"));
// console.log(countLongWords("short and tiny"));
// console.log(countLongWords("all big words here"));


// Q159. Is Anagram
// function isAnagram(str1, str2) {
//   let cleanStr1 = str1.toLowerCase().replace(/[^a-z0-9]/g, "").split("").sort().join("");
//   let cleanStr2 = str2.toLowerCase().replace(/[^a-z0-9]/g, "").split("").sort().join("");
//   return cleanStr1 === cleanStr2;
// }
// console.log(isAnagram("listen", "silent"));
// console.log(isAnagram("Dormitory", "Dirty room"));
// console.log(isAnagram("hello", "world"));


// Q160. Is Pangram
// function isPangram(str) {
//   let alphabet = "abcdefghijklmnopqrstuvwxyz";
//   let lowerStr = str.toLowerCase();
//   for (let i = 0; i < alphabet.length; i++) {
//     if (!lowerStr.includes(alphabet[i])) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isPangram("The quick brown fox jumps over a lazy dog"));
// console.log(isPangram("Sphinx of black quartz, judge my vow"));
// console.log(isPangram("Hello world"));


// ============================================================================
// ARRAY OPERATIONS ADVANCED (Q161-Q200)
// ============================================================================

// Q161. Count Pos Neg Zero
// function countPosNegZero(arr) {
//   let positives = 0;
//   let negatives = 0;
//   let zeros = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) positives++;
//     else if (arr[i] < 0) negatives++;
//     else zeros++;
//   }
//   return { positives: positives, negatives: negatives, zeros: zeros };
// }
// console.log(countPosNegZero([1, -2, 0, 5, -3]));
// console.log(countPosNegZero([-1, -2, -3]));
// console.log(countPosNegZero([0, 0, 0]));


// Q162. Triple Elements
// function tripleElements(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(arr[i] * 3);
//   }
//   return result;
// }
// console.log(tripleElements([1, 2, 3]));
// console.log(tripleElements([-1, 0, 4]));
// console.log(tripleElements([]));


// Q163. Get Absolute Values
// function getAbsoluteValues(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       result.push(-arr[i]);
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log(getAbsoluteValues([-1, 2, -3]));
// console.log(getAbsoluteValues([0, -5, 7]));
// console.log(getAbsoluteValues([10]));


// Q164. Are All Elements Even
// function areAllElementsEven(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(areAllElementsEven([2, 4, 6]));
// console.log(areAllElementsEven([2, 3, 4]));
// console.log(areAllElementsEven([]));


// Q165. Has At Least One Even
// function hasAtLeastOneEven(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(hasAtLeastOneEven([1, 3, 5]));
// console.log(hasAtLeastOneEven([1, 4, 5]));
// console.log(hasAtLeastOneEven([2]));


// Q166. Are All Elements Positive
// function areAllElementsPositive(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] <= 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(areAllElementsPositive([1, 2, 3]));
// console.log(areAllElementsPositive([0, 1, 2]));
// console.log(areAllElementsPositive([-1, 2, 3]));


// Q167. Count Greater Than K
// function countGreaterThanK(arr, k) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > k) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countGreaterThanK([1, 5, 7, 2], 4));
// console.log(countGreaterThanK([10, 20, 30], 25));
// console.log(countGreaterThanK([1, 2, 3], 5));


// Q168. Index of Max
// function indexOfMax(arr) {
//   if (arr.length === 0) return -1;
//   let maxIndex = 0;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > arr[maxIndex]) {
//       maxIndex = i;
//     }
//   }
//   return maxIndex;
// }
// console.log(indexOfMax([3, 7, 2, 7]));
// console.log(indexOfMax([-5, -2, -10]));
// console.log(indexOfMax([42]));


// Q169. Index of Min
// function indexOfMin(arr) {
//   if (arr.length === 0) return -1;
//   let minIndex = 0;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < arr[minIndex]) {
//       minIndex = i;
//     }
//   }
//   return minIndex;
// }
// console.log(indexOfMin([3, 7, 2, 2]));
// console.log(indexOfMin([-5, -2, -10]));
// console.log(indexOfMin([42]));


// Q170. Contains Duplicate
// function containsDuplicate(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
// console.log(containsDuplicate([1, 2, 3, 1]));
// console.log(containsDuplicate([1, 2, 3]));
// console.log(containsDuplicate([]));


// Q171. Remove Duplicates (Method 2)
// function removeDuplicates(arr) {
//   let unique = [];
//   for (let i = 0; i < arr.length; i++) {
//     let exists = false;
//     for (let j = 0; j < unique.length; j++) {
//       if (unique[j] === arr[i]) {
//         exists = true;
//         break;
//       }
//     }
//     if (!exists) {
//       unique.push(arr[i]);
//     }
//   }
//   return unique;
// }
// console.log(removeDuplicates([1, 2, 2, 3, 3, 3]));
// console.log(removeDuplicates(["a", "a", "b"]));
// console.log(removeDuplicates([]));


// Q172. Is Strictly Increasing
// function isStrictlyIncreasing(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] <= arr[i - 1]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isStrictlyIncreasing([1, 2, 3, 4]));
// console.log(isStrictlyIncreasing([1, 2, 2, 3]));
// console.log(isStrictlyIncreasing([5]));


// Q173. Move Negatives To Front
// function moveNegativesToFront(arr) {
//   let negatives = [];
//   let others = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       negatives.push(arr[i]);
//     } else {
//       others.push(arr[i]);
//     }
//   }
//   return negatives.concat(others);
// }
// console.log(moveNegativesToFront([1, -2, 3, -4, 0]));
// console.log(moveNegativesToFront([-1, -2, -3]));
// console.log(moveNegativesToFront([1, 2, 3]));


// Q174. Max Difference
// function maxDifference(arr) {
//   if (arr.length === 0) return 0;
//   let max = arr[0];
//   let min = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) max = arr[i];
//     if (arr[i] < min) min = arr[i];
//   }
//   return max - min;
// }
// console.log(maxDifference([1, 5, 3, 9]));
// console.log(maxDifference([10, 10, 10]));
// console.log(maxDifference([-5, -1, -10]));


// Q175. Get Elements At Even Indices
// function getElementsAtEvenIndices(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i += 2) {
//     result.push(arr[i]);
//   }
//   return result;
// }
// console.log(getElementsAtEvenIndices([10, 20, 30, 40, 50]));
// console.log(getElementsAtEvenIndices(["a", "b", "c", "d"]));
// console.log(getElementsAtEvenIndices([1]));


// Q176. Get Elements At Odd Indices
// function getElementsAtOddIndices(arr) {
//   let result = [];
//   for (let i = 1; i < arr.length; i += 2) {
//     result.push(arr[i]);
//   }
//   return result;
// }
// console.log(getElementsAtOddIndices([10, 20, 30, 40, 50]));
// console.log(getElementsAtOddIndices(["a", "b", "c", "d"]));
// console.log(getElementsAtOddIndices([1]));


// Q177. Count Long Strings
// function countLongStrings(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > 3) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countLongStrings(["hi", "hello", "hey", "Java"]));
// console.log(countLongStrings(["one", "two", "six"]));
// console.log(countLongStrings([]));


// Q178. Get First Chars
// function getFirstChars(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > 0) {
//       result.push(arr[i][0]);
//     }
//   }
//   return result;
// }
// console.log(getFirstChars(["apple", "banana", "cherry"]));
// console.log(getFirstChars(["hi", "yo"]));
// console.log(getFirstChars([]));


// Q179. Remove Empty Strings
// function removeEmptyStrings(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== "") {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log(removeEmptyStrings(["a", "", "b", "", "c"]));
// console.log(removeEmptyStrings(["", ""]));
// console.log(removeEmptyStrings(["js", " "]));


// Q180. Sum Even Elements
// function sumEvenElements(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }
// console.log(sumEvenElements([1, 2, 3, 4, 5]));
// console.log(sumEvenElements([2, 2, 2]));
// console.log(sumEvenElements([1, 3, 5]));


// ============================================================================
// SORTING & SEARCHING (Q181-Q200)
// ============================================================================

// Q181. Sum Odd Elements
// function sumOddElements(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }
// console.log(sumOddElements([1, 2, 3, 4, 5]));
// console.log(sumOddElements([2, 2, 2]));
// console.log(sumOddElements([-1, -2, -3]));


// Q182. Swap Elements
// function swapElements(arr, i, j) {
//   if (i >= 0 && i < arr.length && j >= 0 && j < arr.length) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//   }
//   return arr;
// }
// console.log(swapElements([1, 2, 3, 4], 1, 3));
// console.log(swapElements(["a", "b", "c"], 0, 2));
// console.log(swapElements([10, 20], 0, 0));


// Q183. Rotate Right (K times)
// function rotateRight(arr, k) {
//   let n = arr.length;
//   if (n === 0) return [];
//   k = k % n;
//   let rotated = [];
//   for (let i = 0; i < n; i++) {
//     rotated.push(arr[(n - k + i) % n]);
//   }
//   return rotated;
// }
// console.log(rotateRight([1, 2, 3, 4, 5], 1));
// console.log(rotateRight([1, 2, 3, 4, 5], 2));
// console.log(rotateRight([1, 2, 3], 5));


// Q184. Rotate Left (K times)
// function rotateLeft(arr, k) {
//   let n = arr.length;
//   if (n === 0) return [];
//   k = k % n;
//   let rotated = [];
//   for (let i = 0; i < n; i++) {
//     rotated.push(arr[(i + k) % n]);
//   }
//   return rotated;
// }
// console.log(rotateLeft([1, 2, 3, 4, 5], 1));
// console.log(rotateLeft([1, 2, 3, 4, 5], 2));
// console.log(rotateLeft([1, 2, 3], 5));


// Q185. Merge Sorted Arrays
// function mergeSortedArrays(arr1, arr2) {
//   let merged = [];
//   let i = 0;
//   let j = 0;
//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       merged.push(arr1[i]);
//       i++;
//     } else {
//       merged.push(arr2[j]);
//       j++;
//     }
//   }
//   while (i < arr1.length) {
//     merged.push(arr1[i]);
//     i++;
//   }
//   while (j < arr2.length) {
//     merged.push(arr2[j]);
//     j++;
//   }
//   return merged;
// }
// console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));
// console.log(mergeSortedArrays([1, 2, 2], [2, 3]));
// console.log(mergeSortedArrays([], [1, 2]));


// Q186. Bubble Sort
// function bubbleSort(arr) {
//   let n = arr.length;
//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }
// console.log(bubbleSort([3, 1, 4, 2]));
// console.log(bubbleSort([5, 5, 5]));
// console.log(bubbleSort([-1, 3, 0]));


// Q187. Selection Sort
// function selectionSort(arr) {
//   let n = arr.length;
//   for (let i = 0; i < n - 1; i++) {
//     let minIdx = i;
//     for (let j = i + 1; j < n; j++) {
//       if (arr[j] < arr[minIdx]) {
//         minIdx = j;
//       }
//     }
//     let temp = arr[minIdx];
//     arr[minIdx] = arr[i];
//     arr[i] = temp;
//   }
//   return arr;
// }
// console.log(selectionSort([3, 1, 4, 2]));
// console.log(selectionSort([10, -1, 2]));
// console.log(selectionSort([5]));


// Q188. Insertion Sort
// function insertionSort(arr) {
//   let n = arr.length;
//   for (let i = 1; i < n; i++) {
//     let key = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > key) {
//       arr[j + 1] = arr[j];
//       j = j - 1;
//     }
//     arr[j + 1] = key;
//   }
//   return arr;
// }
// console.log(insertionSort([3, 1, 4, 2]));
// console.log(insertionSort([10, -1, 2]));
// console.log(insertionSort([5, 4, 3, 2, 1]));


// Q189. Kth Smallest
// function kthSmallest(arr, k) {
//   let sorted = arr.slice().sort((a, b) => a - b);
//   return sorted[k - 1];
// }
// console.log(kthSmallest([7, 10, 4, 3, 20, 15], 3));
// console.log(kthSmallest([1, 2, 3], 1));
// console.log(kthSmallest([5, 5, 5], 2));


// Q190. Kth Largest
// function kthLargest(arr, k) {
//   let sorted = arr.slice().sort((a, b) => b - a);
//   return sorted[k - 1];
// }
// console.log(kthLargest([7, 10, 4, 3, 20, 15], 2));
// console.log(kthLargest([1, 2, 3], 1));
// console.log(kthLargest([5, 5, 5], 3));


// Q191. Binary Search
// function binarySearch(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (arr[mid] === target) {
//       return mid;
//     } else if (arr[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return -1;
// }
// console.log(binarySearch([1, 3, 5, 7, 9], 5));
// console.log(binarySearch([2, 4, 6, 8], 1));
// console.log(binarySearch([10], 10));


// Q192. Count Occurrences
// function countOccurrences(arr, target) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countOccurrences([1, 2, 2, 2, 3], 2));
// console.log(countOccurrences([5, 5, 5, 5], 5));
// console.log(countOccurrences([1, 2, 3], 4));


// Q193. Has Pair With Sum
// function hasPairWithSum(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
// console.log(hasPairWithSum([1, 2, 3, 4], 5));
// console.log(hasPairWithSum([1, 2, 3], 10));
// console.log(hasPairWithSum([0, -1, 1], 0));


// Q194. Has Triplet With Sum
// function hasTripletWithSum(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       for (let k = j + 1; k < arr.length; k++) {
//         if (arr[i] + arr[j] + arr[k] === target) {
//           return true;
//         }
//       }
//     }
//   }
//   return false;
// }
// console.log(hasTripletWithSum([1, 2, 3, 4, 5], 9));
// console.log(hasTripletWithSum([1, 1, 1], 4));
// console.log(hasTripletWithSum([0, -1, 2, -3, 1], 0));


// Q195. Max Subarray Sum
// function maxSubarraySum(arr) {
//   if (arr.length === 0) return 0;
//   let maxSum = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     let currentSum = 0;
//     for (let j = i; j < arr.length; j++) {
//       currentSum += arr[j];
//       if (currentSum > maxSum) {
//         maxSum = currentSum;
//       }
//     }
//   }
//   return maxSum;
// }
// console.log(maxSubarraySum([1, -2, 3, 4, -1]));
// console.log(maxSubarraySum([-1, -2, -3]));
// console.log(maxSubarraySum([5]));


// Q196. Max Sum Subarray Size K
// function maxSumSubarraySizeK(arr, k) {
//   if (arr.length < k) return null;
//   let maxSum = -Infinity;
//   for (let i = 0; i <= arr.length - k; i++) {
//     let currentSum = 0;
//     for (let j = 0; j < k; j++) {
//       currentSum += arr[i + j];
//     }
//     if (currentSum > maxSum) {
//       maxSum = currentSum;
//     }
//   }
//   return maxSum;
// }
// console.log(maxSumSubarraySizeK([1, 2, 3, 4, 5], 2));
// console.log(maxSumSubarraySizeK([5, -1, 2, 3], 3));
// console.log(maxSumSubarraySizeK([4, 4, 4], 1));


// Q197. First Non Repeating Char
// function firstNonRepeatingChar(str) {
//   let counts = {};
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (counts[char]) counts[char]++;
//     else counts[char] = 1;
//   }
//   for (let i = 0; i < str.length; i++) {
//     if (counts[str[i]] === 1) {
//       return str[i];
//     }
//   }
//   return null;
// }
// console.log(firstNonRepeatingChar("swiss"));
// console.log(firstNonRepeatingChar("aabbc"));
// console.log(firstNonRepeatingChar("aabb"));


// Q198. First Repeating Char
// function firstRepeatingChar(str) {
//   let seen = {};
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (seen[char]) {
//       return char;
//     }
//     seen[char] = true;
//   }
//   return null;
// }
// console.log(firstRepeatingChar("swiss"));
// console.log(firstRepeatingChar("abca"));
// console.log(firstRepeatingChar("abc"));


// Q199. Remove Consecutive Duplicate Chars
// function removeConsecutiveDuplicateChars(str) {
//   if (str.length === 0) return "";
//   let result = str[0];
//   for (let i = 1; i < str.length; i++) {
//     if (str[i] !== str[i - 1]) {
//       result += str[i];
//     }
//   }
//   return result;
// }
// console.log(removeConsecutiveDuplicateChars("aaabbcddd"));
// console.log(removeConsecutiveDuplicateChars("hellooo"));
// console.log(removeConsecutiveDuplicateChars("a"));


// Q200. Remove Consecutive Duplicate Elements
// function removeConsecutiveDuplicateElements(arr) {
//   if (arr.length === 0) return [];
//   let result = [arr[0]];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] !== arr[i - 1]) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log(removeConsecutiveDuplicateElements([1, 1, 2, 2, 2, 3, 1, 1]));
// console.log(removeConsecutiveDuplicateElements(["a", "a", "b", "b", "a"]));
// console.log(removeConsecutiveDuplicateElements([5, 5, 5]));