let number =153;
let num=number;
let count=0;
let res=0;

while(num>0){
    count++;
    num=parseInt(num/10);
}

function display(num,count){  
  while(num>0){
    let sum=1;
    let temp=num%10;
    let count2=count;
    while(count2>0){
          sum=sum*temp
          count2--;
    }
    res=res+sum;
    num=parseInt(num/10);
    
  }
   
   }
if(display(number, count)==number){
    console.log("Armstrong number");
    
}else{
    console.log(" not Armstrong number");
}

