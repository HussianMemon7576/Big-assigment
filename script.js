// 1. For loop ka syntax likho aur example do.

// for(let i = 0; i < 5; i++) {
//     console.log("Hello, World!");
// }
// for loop humne is liye banaya ke hume 5 baar hello wrold likhwana tha agar hum console.log 5 baar likhe ke hello world likhwate to time wastee and code ki seo sahi nhi hoti
// peghle for loop me me hum variable banate hai phir hum condition dete agar condition  true hoti hai to i ki value + 1 ho jati hai phir wo wapsi loop me jata hai ke i ki value bari hai hai 5 se agar true hoti hai phirr aik baar 1 plus hota hai direct 5 aik saath prinit nhi hota condition check ho kar value aik aik kar ke plus hoti hai

//2 While loop ka difference for loop se explain karo.
// while loop me aik ye farq hai ke hum variable pehle decleare karte hai gloabal scope me phir hum loop me jake in bracket me(condition) dete hai agar true hoti to loop chal ta hai
// Jab pehle se pata ho ke loop kitni baar chalega to for loop likhte hai example 1 se 10 tak counting
// Jab exact number of iterations pata na ho, sirf condition pe depend karta ho to while loop use karte hai example jab user se input lena ho jab tak valid input na mile

// let j = 0
// while(j<5){
//     j++
// }
// console.log(j)




// 3. Do...while loop ka example do jisme kam se kam ek baar print ho.
// do while loop ka aik fad hai ke agar conditon false hai phir bhi loop chalega
// let n = 0;
// do {
//     n++;
// }
// while (n > 5);
// console.log(n);

// 4. ForEach loop ka use array me kaise hota hai? Example do.
// forEach loop array ke har element pe aik function apply karta hai aur us element ko argument ke tor pe function me pass karta hai. Ye loop tab tak chalta hai jab tak array ke tamam elements process na ho jayein.
// ye  loop sirf array pe hi chalta hai
// let arr = [1, 2, 3, 4, 5];
// arr.forEach(function(element) {
//     console.log(element);
// });

// 5. For...in loop object ke liye kaise use hota hai? Example do.
// let user = {
//     name: "Ali",
//     age: 30,
//     city: "Karachi"
// };
// for (let key in user) {
//     console.log(  key + ": " + user[key]);
// }



// Functions (7 Questions)
// 6. Normal function define karo jo 2 numbers ka sum return kare.

// function sum(a,b){
//     return a +b;
// }
// console.log(sum(3,5))

// 7. Arrow function likho jo kisi string ko uppercase kare.

// let user = (name) => {
//     return name.toUpperCase();
// };
// console.log(user('hussain'))

// 8. Anonymous function ka example do jo setTimeout me use ho.
// setTimeout(function() {
//     console.log("Hello after 2 seconds!");
// }, 2000);

// 9. Function me parameter aur return ka example do.
// function me parameter wo hota hai jo function ko drta deta hai return us deta ko kese dikhlana hai and return function se data wapsa leta hai return ke baad agar hum kuch nhi likhe to wo kabhi bhi execute nhi hoga

// 10. Function ke andar loop ka example do (1 se 10 print).
// function printNumbers() {
//     for (let i = 1; i <= 10; i++) {
//         console.log(i);
//     }
// }
// printNumbers();


// 11. Function ke andar nested if else ka example do (marks grading system).
// function grade(marks) {
//     if (marks >=0  && marks<35 ) {

//         return "Fail";
//     } else if (marks >= 35 && marks < 50) {
//         return "D grade";
//     } else if (marks >= 50 && marks < 65) {
//         return "C grade";
//     } else if (marks >= 65 && marks < 80) {
//         return "B grade";
//     } else if (marks >= 80 && marks < 90) {
//         return "A grade";
//     }
//     else if (marks >= 90 && marks <= 100) {
//         return "A+ grade";
//     }
// }
// console.log(grade(87)); 
// 12. Explain karo: Function ke benefits aur use case.
// function se hum repetative code se bach sakte hai is se ye faida hai ke hum aik baar  function banate hai aur bar bar usse use kar sakte hai sirf call karna hota hai de bugging easy ho jati sirf function ke andar check karna hota hai code agar error aye to poora code khrab nhi hota
// function ke use case jese kisi chhez ko calculate kar ke output dena
// function add(a, b) {
//   return a + b;
// }
// console.log(add(2, 3)); // Output: 5

// Validation ke liye
//  Age check
//  Form validation

// function checkAge(age) {
//   if(age >= 18){
//     return "Allowed";
//   } else {
//     return "Not Allowed";
//   }
// }

// Nested if else + Switch (5 Questions)
// 13. Nested if else ka example do jisme age check ho aur message return ho.
// let age = Number(prompt("Enter your age:"));
// let message;
// if (age < 0) {
//     message =  alert("Invalid age");
// }
// else if (age < 13) {
//     message = "You are a child";
// }
// else if (age >= 13 && age < 18) {
//     message = "You are a teenager";
// }
// else {
//     message = "You are an adult";
// }
// alert(message);  




// 14. Switch case ka example do jisme week days print ho.
// let day = Number(prompt("Enter a number (1-7) for the day of the week:"));
// let dayName;
// switch (day) {
//     case 1:
//         dayName = "Monday";
//         break;
//     case 2:
//         dayName = "Tuesday";
//         break;
//     case 3:
//         dayName = "Wednesday";
//         break;
//     case 4:
//         dayName = "Thursday";
//         break;
//     case 5:
//         dayName = "Friday";
//         break;
//     case 6:
//         dayName = "Saturday";
//         break;
//     case 7:
//         dayName = "Sunday";
//         break;
//     default:
//         dayName = "Invalid day number";
// }
// alert(dayName);
// 15. If else aur switch ka difference explain karo 2 points me.

// if else me hum complex conditions check kar sakte hai jab ke switch me sirf equality check kar sakte hai
// if else me hum range check kar sakte hai jab ke switch me sirf exact match kar sakte hai
// 16. Nested if else + loop ka example do jisme array traverse karke even numbers print ho.
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers.forEach(function(num) {
//     if (num % 2 === 0) {
//         console.log(num);
//     }
// });
// 17. Switch case me default ka role explain karo.

// default ka matlab hota hai agar koi case match nhi karta to default chalta hai agar hum default na lagaye to  jab koi case match nahi karega, to kuch execute hi nahi hoga aur koi bhi error nhi ayega.

// General / Mix (3 Questions).

// 19. Explain karo break aur continue ka difference loop me.
// break loop ko puri tarah se rok deta hai aur loop se bahar nikal aata hai
// continue current iteration ko skip kar deta hai aur loop ke next iteration pe chala jata hai
// for (let i = 0; i < 5; i++) {
//     if (i === 2) {
//         break; // loop yahan ruk jayega jab i ki value 2 hogi
//     }
//     console.log(i); 
// }

// for (let i = 0; i < 5; i++) {
//     if (i === 2) {
//         continue; // jab i ki value 2 hogi to ye iteration skip ho jayega
//     }
//     console.log(i); 

// 20. Logical operators (&&, ||) ka nested if else me example do.
// && opretor kehta hai gar dono condition treu hongi to chalunga
// || opretor kehta hai gar aik bhi condition true ho to chalunga   
// let age = 25;
// let hasLicense = true;
// if (age >= 18 && hasLicense) {
//     console.log("You can drive.");
// } else if (age < 18 || !hasLicense) {
//     console.log("You cannot drive.");
// }
// 18. Loops aur functions combine karke ek simple calculator function banao.
// function calculator(num1, num2, operator) {
//     let result;
//     switch (operator) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             result = num1 / num2;

//             break;
//         default:
//             return "Error: Invalid operator";
//     }
//     return result;
// }
// console.log(calculator(20, 5, '/')); 
// Section 1: Variables & Data Types (5 Questions)

// 2. What will be the output of this code? Why?

// console.log(x);
// var x = 10;
// Output: undefined
// Explanation: JavaScript hoisting ki wajah se, variable declarations (lekin not initializations) ko unke scope ke top par le jaya jata hai. Is case me, var x declaration ho jata hai lekin initialization (x = 10) uske baad hoti hai. Isliye, jab console.log(x) execute hota hai, to x ki value undefined hoti hai kyunki wo abhi tak initialize nahi hua hota.
// 3. What will be the output of this code? Why?
// console.log(y);
// let y = 20;
// Output: ReferenceError: Cannot access 'y' before initialization
// Explanation: let aur const variables bhi hoisted hote hain, lekin unka temporal dead zone (TDZ) hota hai. Iska matlab hai ki jab tak variable declare nahi hota, tab tak usse access karna ReferenceError throw karta hai. Is case me, jab console.log(y) execute hota hai, to y abhi tak initialize nahi hua hota, isliye ReferenceError aata hai.

// 4. Explain what happens when you assign a string to a number variable in JavaScript in roman urdu.

// Jab hum JavaScript me aik number variable ko string assign karte hain, to JavaScript automatic type coercion karta hai. Iska matlab hai ke wo koshish karta hai ke string ko number me convert kare. Agar string me valid numeric value hoti hai (jaise "123"), to wo successfully convert ho jati hai aur variable me number store ho jata hai. Lekin agar string me non-numeric characters hote hain (jaise "abc"), to conversion fail ho jata hai aur variable ki value NaN (Not a Number) ho jati hai.
// 5. Write code to check the type of a variable and convert it to a number safely.
// let value = "123";

// console.log(typeof value); 

// let num = Number(value);

// if (isNaN(num)) {
//   console.log("Conversion failed: Not a number");
// } else {
//   console.log("Converted number:", num);
// }
// Section 2: Operators (5 Questions)
// 6. What is the difference between == and ===? Provide a logical example with numbers
// and strings.

// == ye opreator sirf value check karta hai uska data type nhi check karta hai
// Example
// console.log(5 == "5"); output treu ayga kyunki value same hai lekin data type alag hai
// // === ye opreator value ke sath sath data type bhi check karta hai
// // Example
// console.log(5 === "5"); output false ayga kyunki value same hai lekin data type alag hai
// 7. Write a code snippet using logical operators (&&, ||) to check if a number is between
// 10 and 50.
// let number = 30;
// if (number >= 10 && number <= 50) {
//     console.log("The number is between 10 and 50.");
// } else {
//     console.log("The number is not between 10 and 50.");
// }

// 8. Predict the output of :
// console.log(5 + "5" - 3);
// Output: 52
// 9. Explain why NaN === NaN is false in roamn urdu.
// NaN (Not a Number) JavaScript me ek special value hai jo tab generate hoti hai jab koi mathematical operation valid number produce nahi karta. Jab hum NaN === NaN check karte hain, to ye false return karta hai kyunki NaN apne aap se bhi equal nahi hota. Iska matlab hai ke NaN kisi bhi value ke barabar nahi hota, including itself. Isliye, NaN === N
// aN false hota hai.

// Section 3: If, Nested If, Switch (5 Questions)
// 11. Write a nested if else to assign grades:
// • Marks ≥ 80 → A
// • 60–79 → B
// • 50–59 → C

// let grade = Number(prompt("enter tour grade number"))
// let result;

// if(grade>0 && grade<=50 ){
// result = alert("you are failed")

// } else if(grade >= 51 && grade <= 59){
//     result = alert("c grade passed")
// }  else if(grade >= 60 && grade <= 79){
//     result = alert("B grade passed")
// } else if(grade >= 80 && grade <= 100){
//     result = alert("A grade passed")
// } else {
//     result = alert("invalid grade")
// }
// 12. Explain with example when nested if else is preferred over multiple if else.
// jub hume multiple condition check karni hoti hai aur un conditions ke darmiyan logical relationship hota hai, to nested if else zyada suitable hota hai. Isse code zyada organized aur readable hota hai. For example, agar hume check karna hai ke ek student pass hua hai ya nahi, aur agar pass hua hai to uska grade kya hai, to nested if else use karna better hoga:
// lekin zayada nested if else karne se program crash bhi ho sakta hai
// 13. Rewrite the nested if else from Q11 using switch (true).
// let grade = Number(prompt("enter tour grade number"))
// let result;
// switch (true) {
//     case (grade > 0 && grade <= 50):
//         result = alert("you are failed");    
//         break;
//     case (grade >= 51 && grade <= 59):
//         result = alert("c grade passed");
//         break;
//     case (grade >= 60 && grade <= 79):
//         result = alert("B grade passed");
//         break;
//     case (grade >= 80 && grade <= 100):
//         result = alert("A grade passed");
//         break;
//     default:
//         result = alert("invalid grade");
// }
// 14. Predict output and why:
// let x = 10;
// if(x > 5){
// if(x < 15){
// console.log("Inside");
// } else {
// console.log("Outside");
// }
// }
// Output: Inside
// Explanation: Pehle condition check hoti hai ke x > 5 hai ya nahi, jo ke true hai. Phir nested if me check hota hai ke x < 15 hai ya nahi, jo bhi true hai. Isliye, "Inside" print hota hai. Agar x ki value 15 ya usse zyada hoti, to "Outside" print hota.


// 15. Write a switch case that outputs day type:
// • Monday–Friday → Weekday
// • Saturday–Sunday → Weekend

// let day = "Monday";

// switch (day) {
//     case "Monday":
//     case "Tuesday":
//     case "Wednesday":
//     case "Thursday":
//     case "Friday":
//         console.log("Weekday");
//         break;

//     case "Saturday":
//     case "Sunday":
//         console.log("Weekend");
//         break;

//     default:
//         console.log("Invalid day");
// }

// Section 4: Loops (5 Questions)
// 16. Write a for loop that prints all even numbers from 2 to 20.
// for (let i = 2; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }
// 17. Write a while loop that prints numbers divisible by 3 between 1 and 30.

// let i = 1;
// while (i <= 30) {
//     if (i % 3 === 0) {
//         console.log(i);
//     }
//     i++;
// }

// 18. Write a do...while loop that executes at least once and prints numbers 5–1 in reverse.
// let j = 5;
// do {
//     console.log(j);
//     j--;
// } while (j >= 1);
// 19. Given an array [1, 2, 3, 4, 5], write a loop to print the sum of all elements.

// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// arr.forEach(function(element) {
//     sum += element;
// }   
// );
// console.log("Sum of all elements:", sum);

// for(let i=0;i<5;i++){
// if(i===3) break;
// console.log(i);
// }
// Output: 0 1 2
// Section 5: Functions (5 Questions)
// 21. Write a normal function that takes two numbers and returns the maximum.
// function max(a, b) {
//     if (a > b) {
//         return a;
//     } else {
//         return b;
//     }
// }
// console.log(max(10, 20));
// 22. Convert the function from Q21 to arrow function.
// let max = (a, b) => {
//     if (a > b) {
//         return a;
//     } else {
//         return b;
//     }
// };
// console.log(max(10, 20));

// 23. Write an anonymous function that prints "Hello World" after 2 seconds.
// setTimeout(function() {
//     console.log("Hello World");
// // }, 2000);
// 24. Explain parameter default values with a function example.

// function num (num1 = 5, num2 = 10) {
//     return num1 + num2;
// }
// console.log(num()); // Output: 15 (default values used)
// 25. Write a function that takes an array of numbers and returns an array of squared values

// using map().

// let array = [1, 2, 3, 4, 5];
// let squaredArray = array.map(function(num) {
//     return num * num;
// }
// );
// console.log(squaredArray); 
// Section 6: Arrays (10 Questions)
// 27. Write a code to remove the second element from ["Ali", "Ahmed", "Sara"] using splice().

// let arr = ["Ali", "Ahmed", "Sara"];
// arr.splice(1, 1);
// console.log(arr);

// 28. Write a code using forEach() to print only strings with more than 3 letters.

// let arr = ["Ali", "Ahmed", "Sara", "Zo"];

// arr.forEach(function(element) {
//     if (element.length > 3) {
//         console.log(element);
//     }
// });

// 29. Using filter(), find all numbers greater than 50 in [45, 60, 30, 90, 55].

// let numbers = [45, 60, 30, 90, 55];
// let filteredNumbers = numbers.filter(function(num) {
//     return num > 50;
// }
// );
// console.log(filteredNumbers);
// 30. Using map(), increase every number in [10, 20, 30] by 10.
let arr = [10,20,30,40,50];
  let val = arr.map(function(num) {
    return num + 10;
  }
    );
    console.log(val);
// 33. Predict output:

// let arr = [1,2,3];
// let copy = arr;

// copy.push(4);
// console.log(arr);
// Output: [1, 2, 3, 4]
// Explanation: Jab hum arr ko copy variable me assign karte hain, to hum reference copy kar rahe hote hain, na ke actual array ki copy. Iska matlab hai ke dono variables (arr aur copy) same array ko point kar rahe hote hain. Jab hum copy me push(4) karte hain, to wo original array (arr) me bhi reflect hota hai. Isliye, jab hum arr ko print karte hain, to usme 4 bhi shamil hota hai.
// 34. Write code to reverse an array and convert it into a string separated by "-".
// let arr = [1, 2, 3, 4, 5];
// let reversedString = arr.reverse().join("-");
// console.log(reversedString); // Output: "5-4-3-2-1"
// 35. Given let students = ["Ali", "Ahmed", "Sara", "Hina"];
// • Remove "Ahmed"
// • Add "Zoya" at the start
// • Print final array
// let students = ["Ali", "Ahmed", "Sara", "Hina"];
// students.push("Zoya");
// students.splice(1, 1);
// console.log(students);

// Section 7: Mix / Logical Challenge (5 Questions)

// 36. Write a function that prints prime numbers from 1 to 50 using loops.
// function isPrime(num) {
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }
// for (let n = 1; n <= 50; n++) {
//     if (isPrime(n)) {
//         console.log(n);
//     }
// }
// 37. Write a function that takes marks array [30,60,80,45,90] and returns pass/fail status for
// each student using map().
let marks = [30, 60, 80, 45, 90];
let status = marks.map(function(mark) {
    return mark >= 50 ? "Pass" : "Fail";
}
);
console.log(status);
// 
// 40. Write a program using loop + nested if else to print numbers from 1–20 and mark
// even/odd next to each number
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " is Even");
//     } else {
//         console.log(i + " is Odd");
//     }
// }
