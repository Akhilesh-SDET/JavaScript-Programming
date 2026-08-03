let number=1451;
let num=number;
let sum=0;

while(num>0){
    let temp=num%10;
sum=sum+factorial(temp);
    num= parseInt(num/10) 
}

function factorial(val){
    let res=1;
    for(let i=1;i<=val;i++){
            res=res*i;
    }
    return res
}

if(sum==number){
    console.log("Given number is Strong number");
}else{
    console.log("Given number is not Strong number");
}
