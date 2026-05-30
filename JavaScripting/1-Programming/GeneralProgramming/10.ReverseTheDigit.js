let num=848203;
let rev=0;

while(num>0){
rev = rev*10 +num%10;
num=Math.trunc(num/10);

}
console.log(rev);