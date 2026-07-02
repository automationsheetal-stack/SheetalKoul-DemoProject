// 1. WAP to print the numbers 1-100
//Loop
for (let i=0; i<=100; i++)
    console.log(i)

//2. WAP to find even and odd numbers
//if-else

let p = 57
if(p % 2 == 0)
    console.log(" The number is even:", p)
else
    console.log("This is an odd number:",p)

//3.WAP to find reverse a string and check whether the given string is palindrome or not

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

/ WAP to find the factorial

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
      