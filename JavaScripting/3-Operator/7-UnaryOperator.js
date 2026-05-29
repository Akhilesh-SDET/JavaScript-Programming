/*

Operator    Meaning                    Example
++          Increment                   a++
--          Decrement                   a--
typeof      check data type             typeof a
!           Logical NOT                 !true
+           convert to number           +"5"
-           convert to number           -"5"

*/

//pre-increament

let a=10;
console.log(++a)//11
console.log(a)//11

//pre-decreament

let a=10;
console.log(--a)//9
console.log(a)//9

//post-increament

let a=10;
console.log(a++)//10
console.log(a)//11

//post-decrment
let a=10;
console.log(a--)//10
console.log(a)//9

//typeof operator
let a=10
console.log(typeof a) // "number"

//logical not operator
console.log(!true) // false
console.log(!false) // true

//unary plus operator
let a = "5";
console.log(+a) // 5

//unary minus operator
let b = "5";
console.log(-b) // -5
