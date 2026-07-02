//JavaScript Fundamentals - Revise and Practice
// Variables, Data Types, Operators, if-else, Loops(for, while) and Functions

//Topic 1: Variables : There are three types of variables in JavaScript
//1. Let   2.Const   3.Var
// 1. Let has a  local/block scope
// variable once declared cannot be redeclared
//2. Const: Has a local/block scope and value once assigned cannot be updated
// Also const variables cannot de redeclared
// You cannot assign any value to a const variable
//3. Var: It has a global scope.
//Variable can be redeclared and updated.

let x
const a = 2
const b = 5

x = a+b

console.log("The addition is :", x)

var op = 0
var z = 10
let v = 5
var z = 30   //va;id and works as well
//let v = 10  //invalid as let variables cannot be redeclared
op = z+v

console.log("The addition is :", op)

{
    let ip =5
    console.log(ip)
}
// console.log(ip) //invalid as let variables have only block space

// Topic 2: Data types in JS
// Primitive data types: Number, String, Boolean, undefined, Null, BigInt, Symbol
// Non Primitive types: Objects (Arrays and Functions)
// An object is a collection of values

let age = 20
console.log("The age is of type :", typeof(age))

let name = "Sheetal"
console.log("The name is of type :", typeof(name))

let price = 100.50
console.log("The price is of type :", typeof(price))


let decision = true
console.log("The decision is of type :", typeof(decision))

let answer = false
console.log("The answer is of type :", typeof(answer))

let data = null
console.log("The data is of type :", typeof(data))

let big = BigInt("123")
console.log(big)
console.log("The big is of type :", typeof(big))

let sym = Symbol("Hello!")
console.log(sym)
console.log("The sym is of type :", typeof(sym))

const student =
{
    marks : 20,
    percentage : 80,
    classname  : "SECOMP",
    isPass : true
};
console.log(student)
console.log("The student is of type :", typeof(student))
console.log("Student marks are :",student["marks"])
console.log("Student's Marks :",student.marks)// this is valid too

console.log("Student's Percentage :",student["percentage"])
console.log("Student's ClassName :",student["classname"])

//Operators




//if-else
//WAP to find even and odd number
let p = 57
if(p % 2 == 0)
    console.log(" The number is even:", p)
else
    console.log("This is an odd number:",p)

//WAP to find reverse a string and check whether the given string is palindrome or not

let str1 = "madam"
str2 = str1.length
console.log("The length of the string is:",str2)

let result = ""
for (let index = str2-1; index>=0; index--)
      result = result + str1[index]
    
console.log("The reverse of the original string is:",result)
if(result === str1)
{
   console.log("String is a palindrome")
    
}
else
{
    console.log("String is not a palindrome")
}
    
// Check the number palindrome



// WAP to print the fibbonacci series
let fib1 = 0
let fib2 = 1
let fib3 = 0
console.log("The fibbonaci series:", fib1, fib2)
for (let ind = 1; ind<=10; ind++)
{
   fib3 = fib1 + fib2
   fib1 = fib2
   fib2 = fib3
   console.log("The fibbonaci series:", fib3)
}

// WAP to find the factorial

 var fact =1
 var n = 3
 while(n>0)
 {
    fact = fact*n
    n--
    
 }


 
console.log("The factorial of a number is:", fact)
   
// WAP to count vowels
let st = "Sheetal"
stLength = st.length
var cnt =0
for(let k=0; k<stLength; k++)
{
    if(st[k]=== 'a' || st[k]=== 'e' || st[k]=== 'i' || st[k]=== 'o' || st[k]=== 'u')
    {
        cnt++
        console.log("The vowel found is :", st[k])
    } 

}
console.log("The vowel count is :", cnt)
      

// Find the largest of three numbers
let num1 = 10
let num2 = 20
let num3 = 30
if(num1 > num2 && num1 > num3)
    console.log("The largest number is:",num1)
else if(num2 > num1 && num2 > num3)
    console.log("The largest number is:",num2)
else
    console.log("The largest number is:",num3)

    


//Loops
for (let i=0; i<=100; i++)
    console.log(i)



//Arrays



//Functions















