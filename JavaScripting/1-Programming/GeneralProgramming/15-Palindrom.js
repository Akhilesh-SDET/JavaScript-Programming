let num=121;
let temp=num;
let rev=0;

while(num>0){
rev = rev*10 +num%10;
num=Math.trunc(num/10);

}
if(rev==temp){
    console.log("Palindrom")
}else{
    console.log("Note Palindrom");
}
