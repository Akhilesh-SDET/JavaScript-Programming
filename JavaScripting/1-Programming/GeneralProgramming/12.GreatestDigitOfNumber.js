let num=8498203;
let greatestDigit=0;

while(num>0){
temp=num%10;
if(greatestDigit<temp){
    greatestDigit=temp;
}
num=Math.trunc(num/10);

}
console.log(greatestDigit);