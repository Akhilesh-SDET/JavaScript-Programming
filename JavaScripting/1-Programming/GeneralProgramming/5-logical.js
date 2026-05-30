//write a program to print 1 to 10 except even number and 5 also
for(let i=1;i<=10;i++){
    if(i%2 !=0){
        if(i==5){
            continue;
        }
        console.log(i);
    }
}