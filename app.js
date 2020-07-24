//----------------------------------------------------------------------------------------------------------------------------------
// // Q 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”
//----------------------------------------------------------------------------------------------------------------------------------

// let x = prompt("Enter the city name:")

// if (x === "Karachi") {
//     document.write("Welcome to the city of light");
// } else if (x != "Karachi") {
//     document.write("Welcome to the " + x);
// }

//----------------------------------------------------------------------------------------------------------------------------------
// // Q 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.
//----------------------------------------------------------------------------------------------------------------------------------

// let g = prompt("Enter your Gender");

// if (g === "male" || g === "Male") {
//     document.write("Good Morning Sir");
// } else if (g === "female" || g === "Female") {
//     document.write("Good Morning Ma'am");
// } else {
//     document.write("Write gender name correct!")
// }

//----------------------------------------------------------------------------------------------------------------------------------
// // Q 3. Write a program to take input color of road traffic signal from the user & show the message according to the table:
//----------------------------------------------------------------------------------------------------------------------------------

// let s = prompt("Enter signal color");

// if (s === "Red" || s === "red") {
//     document.write("Must Stop!");
// } else if (s === "Yellow" || s === "yellow") {
//     document.write("Ready to move");
// } else if (s === "Green" || s === "green") {
//     document.write("Move now");
// } else {
//     document.write("Enter signal color name!")
// }

//----------------------------------------------------------------------------------------------------------------------------------
// // Q 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”
//----------------------------------------------------------------------------------------------------------------------------------

// let l = prompt("Enter remaining fuel of car");

// if (l < 0.25) {
//     alert("Please refill the fuel in your car");
// } else {
//     alert("The fuel is OK");
// }

//----------------------------------------------------------------------------------------------------------------------------------
// // Q 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.
//----------------------------------------------------------------------------------------------------------------------------------

// var a = 4;
// if (++a === 5) { alert("given condition for variable a is true"); } //true

// var b = 82;
// if (b++ === 83) { alert("given condition for variable b is true"); }

// var c = 12;
// if (c++ === 13) { alert("condition 1 is true"); }
// if (c === 13) { alert("condition 2 is true"); } //true
// if (++c < 14) { alert("condition 3 is true"); }
// if (c === 14) { alert("condition 4 is true"); } //true

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) { alert("The cost equals"); } //true

// if (true) { alert("True"); }
// if (false) { alert("False"); }

// if ("car" < "cat") { alert("car is smaller than cat"); } //true

//----------------------------------------------------------------------------------------------------------------------------------
// // Q 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:
//----------------------------------------------------------------------------------------------------------------------------------

// let totalMarks = 300;
// let engMarks = parseInt(prompt("Enter your English Marks"));
// let urduMarks = parseInt(prompt("Enter your Urdu Marks"));
// let mathMarks = parseInt(prompt("Enter your Math Marks"));
// let obtMarks = parseInt(engMarks + urduMarks + mathMarks);
// let percentage = parseInt(obtMarks * 100 / totalMarks);
// document.write("Total Marks :" + totalMarks + "<br>");
// document.write("Marks Obtained :" + obtMarks + "<br>");
// document.write("Percentage :" + percentage + "%" + "<br>");
// if (percentage >= 80) {
//     document.write("Grade: A+1" + "<br>");
//     document.write("Remarks: Excellent" + "<br>");
// } else if (percentage >= 70) {
//     document.write("Grade: A" + "<br>");
//     document.write("Remarks: Good" + "<br>");
// } else if (percentage >= 60) {
//     document.write("Grade: B" + "<br>");
//     document.write("Remarks: You need to improve" + "<br>");
// } else {
//     document.write("Grade: Fail" + "<br>");
//     document.write("Remarks: Sorry" + "<br>");
// }

//----------------------------------------------------------------------------------------------------------------------------------
// // Q 7. Guess Game
//----------------------------------------------------------------------------------------------------------------------------------

// let num = 7;
// let guess = prompt("Guess a number b/w 1 to 10");

// if (guess == num) {
//     alert("“Bingo! Correct answer”")
// } else if (guess == num + 1) {
//     alert("“Close enough to the correct answer”")
// }


//----------------------------------------------------------------------------------------------------------------------------------
// // Q 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.
//----------------------------------------------------------------------------------------------------------------------------------

// let num = prompt("Enter the Number");
// if (num % 3 == 0) {
//     alert(num + " is divisible by 3")
// } else {
//     alert(num + " is not divisible by 3")
// }

//----------------------------------------------------------------------------------------------------------------------------------
// // Q 9. Write a program that checks whether the given input is an even number or an odd number.
//----------------------------------------------------------------------------------------------------------------------------------

// let num = prompt("Enter the Number")
// if (num % 2 == 0) {
//     alert(num + " is an even number")
// } else {
//     alert(num + " is an odd number")
// }

//----------------------------------------------------------------------------------------------------------------------------------
// // Q 10. Write a program that takes temperature as input and shows a message based on criteria...
//----------------------------------------------------------------------------------------------------------------------------------

// let temperature = prompt("Enter Temperature");
// if (temperature > 40) {
//     alert("It is too hot")
// } else if (temperature > 30) {
//     alert("The weather today is Normal")
// } else if (temperature > 20) {
//     alert("Today's weather is cool")
// } else {
//     alert("OMG! Today’s weather is so Cool")
// }

//----------------------------------------------------------------------------------------------------------------------------------
// // Q 11. Write a program to create a calculator for +,-,*, / & % using if statements.
//----------------------------------------------------------------------------------------------------------------------------------

// let firstNum = prompt("Enter First Number");
// let secondNum = prompt("Enter Second Number");
// let opperator = prompt("Select Operator + , - , * , / or %")

// if (opperator == "+") {
//     alert(parseInt(firstNum) + parseInt(secondNum));
// } else if (opperator == "-") {
//     alert(firstNum - secondNum);
// } else if (opperator == "*") {
//     alert(firstNum * secondNum);
// } else if (opperator == "/") {
//     alert(firstNum / secondNum);
// } else if (opperator == "%") {
//     alert(firstNum % secondNum);
// } else {
//     alert("Select Correct Opperator!")
// }

// // --------------------------------<<  END  >>-------------------------------- // //


// :::::::::::::::::::::::::::::::::\\ Chapter 12, 13 // :::::::::::::::::::::::::::::::::\\

//----------------------------------------------------------------------------------------------------------------------------------
// // Q 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter.
//----------------------------------------------------------------------------------------------------------------------------------

// let character = prompt("Enter any Character");
// let checkCode = character.charCodeAt();
// if (checkCode >= 65 && checkCode <= 90) {
//     alert("Uppercase")
// } else if (checkCode >= 97 && checkCode <= 122) {
//     alert("Lowercase")
// } else if (parseInt(character) >= 0 && parseInt(character) <= 0) {
//     alert("This is a Number");
// } else {
//     alert("Write single character");
// }


//----------------------------------------------------------------------------------------------------------------------------------
// // Q 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
//----------------------------------------------------------------------------------------------------------------------------------

// let num1 = prompt("Enter First Numer");
// let num2 = prompt("Enter Second Numer");

// if (parseInt(num1) > parseInt(num2)) {
//     alert(num1 + " is larger one");
// } else if (parseInt(num1) == parseInt(num2)) {
//     alert("Both are the same number");
// } else {
//     alert(num2 + " is larger one")
// }

//----------------------------------------------------------------------------------------------------------------------------------
// // Q 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.
//----------------------------------------------------------------------------------------------------------------------------------

// let num = prompt("Enter the Number");

// if (parseInt(num) > 0) {
//     alert(num + " is positive");
// } else if (parseInt(num) == 0) {
//     alert("The Number is zero");
// } else if (parseInt(num) < 0) {
//     alert(num + " is negative");
// } else {
//     alert("Enter just a Number");
// }

//----------------------------------------------------------------------------------------------------------------------------------
// // Q 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise.
//----------------------------------------------------------------------------------------------------------------------------------

// let character = prompt("Enter a character");

// if (character == "A" || character == "a" || character == "E" || character == "e" || character == "I" || character == "i" || character == "O" || character == "o" || character == "U" || character == "u") {
//     alert("True");
// } else {
//     alert("False");
// }

//----------------------------------------------------------------------------------------------------------------------------------
// // Q 5. Check Password
//----------------------------------------------------------------------------------------------------------------------------------

// let correctPass = "Saylani";
// let userPass = prompt("Enter your Password");

// if (correctPass === userPass) {
//     alert("Correct! The password you entered matches the original password");
// } else if (userPass == "") {
//     alert("Please enter your password");
// } else {
//     alert("Incorrect Password");
// }

//----------------------------------------------------------------------------------------------------------------------------------
// // Q 6. This if/else statement does not work. Try to fix it:
//----------------------------------------------------------------------------------------------------------------------------------

// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
//     alert(greeting);
// } else {
//     greeting = "Good evening";
//     alert(greeting);
// }

//----------------------------------------------------------------------------------------------------------------------------------
// // Q 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm.
//----------------------------------------------------------------------------------------------------------------------------------

// let timeInput = prompt("Enter time in 24 hour format");
// let time = parseInt(timeInput);

// if (time >= 0000 && time < 1200) {
//     alert("Good Morning!")
// } else if (time >= 1200 && time < 1700) {
//     alert("Good afternoon!")
// } else if (time >= 1700 && time < 2100) {
//     alert("Good evening!")
// } else if (time >= 2100 && time <= 2359) {
//     alert("Good Night!")
// } else {
//     alert("Enter correct input")
// }


// // --------------------------------<<  END  >>-------------------------------- // //


// :::::::::::::::::::::::::::::::::\\ Chapter 14-16 // :::::::::::::::::::::::::::::::::\\

//----------------------------------------------------------------------------------------------------------------------------------
// // Q 1. Declare an empty array using JS literal notation to store student names in future.
//----------------------------------------------------------------------------------------------------------------------------------

// let arr = [];

// arr[0] = "Afzaal";
// arr[1] = "Ahmed";

// alert(arr);

//----------------------------------------------------------------------------------------------------------------------------------
// // Q 3. Declare and initialize a strings array.
//----------------------------------------------------------------------------------------------------------------------------------

// let arr = ["Apple", "Mango", "Grapes", "Pomegranate", "Guava"];
// alert(arr);

//----------------------------------------------------------------------------------------------------------------------------------
// // Q 4. Declare and initialize a numbers array.
//----------------------------------------------------------------------------------------------------------------------------------

// let arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
// alert(arr);

//----------------------------------------------------------------------------------------------------------------------------------
// // Q 5. Declare and initialize a boolean array.
//----------------------------------------------------------------------------------------------------------------------------------

// let arr = [true, false];
// alert(arr)

//----------------------------------------------------------------------------------------------------------------------------------
// // Q 6. Declare and initialize a mixed array.
//----------------------------------------------------------------------------------------------------------------------------------

// let arr = [5, "parrots", true];
// alert(arr)

//----------------------------------------------------------------------------------------------------------------------------------
// // Q 7. Declare and Initialize an array and store available education qualifications in Pakistan.
//----------------------------------------------------------------------------------------------------------------------------------

// let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
// document.write("<h1>Qualifications:</h1><br>" + "1) " + qualifications[0] + "<br>" + "2) " + qualifications[1] + "<br>" + "3) " + qualifications[2] + "<br>" + "4) " + qualifications[3] + "<br>" + "5) " + qualifications[4] + "<br>" + "6) " + qualifications[5] + "<br>" + "7) " + qualifications[6] + "<br>" + "8) " + qualifications[7]);

//----------------------------------------------------------------------------------------------------------------------------------
// // Q 8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student.
//----------------------------------------------------------------------------------------------------------------------------------

// let student = ["Michael", "John", "Tony", "Ahmed"];
// let score = [320, 230, 480, 500];
// let totalscore = 500;

// for (let i in score) {

//     document.write("Score of " + student[i] + " is " + score[i] + ". Percentage: " + score[i] / totalscore * 100 + "% <br>");
//     i++;
// }

//----------------------------------------------------------------------------------------------------------------------------------
// // Q 9.
//----------------------------------------------------------------------------------------------------------------------------------

// let colorNames = ["White", "Red", "Yellow", "Blue"];
// document.write(colorNames + "<br>");

// // a
// let addInBegining = prompt("What color do you want to add in the beginging?");
// colorNames.unshift(addInBegining);
// document.write(colorNames);






//----------------------------------------------------------------------------------------------------------------------------------
// // Q 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
//----------------------------------------------------------------------------------------------------------------------------------

// let arr = [320, 230, 480, 120];
// document.write("Score of Students: " + arr + "<br>");

// arr.sort()
// document.write("Ordered Score of Students: " + arr);

//----------------------------------------------------------------------------------------------------------------------------------
// // Q 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.
//----------------------------------------------------------------------------------------------------------------------------------

// let cities = ["Karachi", "Lahore", "Islamabad", "Qretta", "Peshawar"];
// document.write("<h3>Cities List:</h3>" + cities);

// let selectedCities = cities.slice(2, 4);
// document.write("<h3>Selected Cities List:</h3>" + selectedCities);

//----------------------------------------------------------------------------------------------------------------------------------
// // Q 12. Write a program to create a single string from the below mentioned array:
//----------------------------------------------------------------------------------------------------------------------------------

// var arr = ["This", "is", "my", "cat"];
// document.write("<b>Array:</b> <br>" + arr + "<br>");

// var joinedArr = arr.join(" ");
// document.write("<b>String:</b> <br>" + joinedArr);

//----------------------------------------------------------------------------------------------------------------------------------
// // Q 15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array.
//----------------------------------------------------------------------------------------------------------------------------------

// let company = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select>" + "<option>" + company[0] + "</option>" + "<option>" + company[1] + "</option>" + "<option>" + company[2] + "</option>" + "<option>" + company[3] + "</option>" + "<option>" + company[4] + "</option>" + "<option>" + company[5] + "</option>" + "</select>");


// // --------------------------------<<  END  >>-------------------------------- // //


// :::::::::::::::::::::::::::::::::\\ Chapter 17-20 // :::::::::::::::::::::::::::::::::\\

//----------------------------------------------------------------------------------------------------------------------------------
// // Q 3. Write a program to print numeric counting from 1 to 10.
//----------------------------------------------------------------------------------------------------------------------------------

// for (var i = 1; i <= 10; i++) {
//     document.write(i + "<br>");
// }

//----------------------------------------------------------------------------------------------------------------------------------
// // Q 4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.
//----------------------------------------------------------------------------------------------------------------------------------

// let num = parseInt(prompt("Enter Number"));
// let tableLen = parseInt(prompt("Enter length of Table"));

// document.write("Multiplication table of " + num + "<br>" + "Length " + tableLen + "<br><br>");

// for (var i = 1; i <= tableLen; i++) {
//     document.write(num + " X " + i + " = " + num * i + "<br>");
// }

//----------------------------------------------------------------------------------------------------------------------------------
// // Q 5. Write a program to print items of the following array using for loop:
//----------------------------------------------------------------------------------------------------------------------------------

// let arr = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];

// for (var i = 0; i < arr.length; i++) {
//     document.write(arr[i] + "<br>");
// }
// document.write("<br>");
// for (var i = 0; i < arr.length; i++) {
//     document.write("Element at index " + i + " is " + arr[i] + "<br>");
// }

//----------------------------------------------------------------------------------------------------------------------------------
// // Q 6. Generate the following series in your browser. See example output.
//----------------------------------------------------------------------------------------------------------------------------------

// // a
// document.write("<h3>Counting:</h3>");
// for (var i = 1; i <= 15; i++) {
//     document.write(i + "," + " ");
// }

// // b
// document.write("<h3>Reverse counting:</h3>");
// for (var i = 10; i > 0; i--) {
//     document.write(i + "," + " ");
// }

// // c
// document.write("<h3>Even:</h3>");
// let num = 20;
// for (var i = 0; i <= num; i++) {
//     if (i % 2 == 0) {
//         document.write(i + " , ");
//     }
// }

// // d
// document.write("<h3>Odd:</h3>");
// for (var i = 0; i <= num; i++) {
//     if (i % 2 == 1) {
//         document.write(i + " , ");
//     }
// }

// // e
// document.write("<h3>Series:</h3>");
// for (var i = 1; i <= num; i++) {
//     if (i % 2 == 0) {
//         document.write(i + "k, ");
//     }
// }

//----------------------------------------------------------------------------------------------------------------------------------
// // Q 7. Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.
//----------------------------------------------------------------------------------------------------------------------------------

let A = ["cake", "apple pie", "cookie", "chips", "patties"];

let userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");

for (var i = 0; i < A.length; i++) {
    if (A[i] === userInput) {
        alert(userInput + " is available at index " + i + " in our bakery");
    } else {
        alert("We are sorry. " + userInput + " is not available in our bakery");
    }

}