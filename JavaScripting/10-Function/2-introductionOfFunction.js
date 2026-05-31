function main(){
    console.log("Start main");
    let a=m1(); // undefined
      console.log(a)
      console.log("main End");
}

function m1(){
    console.log("m1 start")
    console.log("m1 end")
}

main();

//=======================================second====================================

function main2(){
    console.log("main starts")
    let a =m2();//storing return value
    console.log(a);
    let b= m2("main2 End");
}

function m2(){
    let a=10;
    let b=20
    console.log("m2 starts")
    console.log("m2 end")
    return a+b; // 10+20=30;
}
main2();
