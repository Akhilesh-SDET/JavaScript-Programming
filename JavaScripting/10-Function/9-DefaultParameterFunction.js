//DefaultParameter---->if function have a some default value in parameter that function is called default parameter function
//in th
function add(a,b=1){
    return a+b;
}
console.log(add(6));//NaN

//===========================
function add(a=10,b=20){
    return a+b;
}
console.log(add(6,9));//14
console.log(add());//30
