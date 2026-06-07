//javaScript doesn't support function overloading like java c++
//
function add(a,b){
    console.log(a+b);
    console.log("Hiii")
}

function add(a,b,c){
    console.log(a+b+c);
    console.log("Hello")
}

//--------------------------to ovoid overloading issues we go below approch to achhive almost overloading-----------------------

function add1(){
    if(arguments.length==2){
        return arguments[0]+arguments[1];
    }else{
        return arguments[0]+arguments[1]+arguments[2];
    }
}
console.log(add1(6,9));
console.log(add1(6,9,8));
