let num=6;
let sum=0;
for(let i=0; i<=num ; i++){
    if(num%i==0){
        sum =+i;
    }
}
if(sum==num){
    console.log("number is prime")
}else{
    console.log("number is not prime");
}
