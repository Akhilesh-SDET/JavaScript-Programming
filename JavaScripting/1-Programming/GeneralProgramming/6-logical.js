//write a program to print 1 to 50===>
//   %3-"Fizz" , %5-"Buzz" , both 3&5-"fizzbuzz", stop loop num>20

for(let i=1; i<=50; i++){
   if(i%3==0 && i%5==0){
    console.log(i+"----------> "+"fizzbuzz");
    if(i>20) break;
   }else if(i%3==0){
    console.log(i+"----------> "+"Fizz");
    if(i>20) break;
   }else if(i%5==0){
    console.log(i+"----------> "+"Buzz");
     if(i>20) break;
   }
}