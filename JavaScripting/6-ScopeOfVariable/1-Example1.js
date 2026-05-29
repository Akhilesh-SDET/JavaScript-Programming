// global variable
var b=20;
let a=10;
const c=50;
{
    console.log(a);//10
    console.log(b);//20
    console.log(c);///50
    
}

// var Belogs to Global Scope 

{
    var aa=40;
    console.log(aa)//40
}
console.log("var is access from outside "+aa);

//let & const belong to only block scope
{
    let aaa=40;
    console.log(aaa)//40
}
console.log("trying to acces let outside of block in next upcoming line");
console.log("let is access from outside"+aaa);//error

//const & const belong to only block scope
{
    let aaaa=40;
    console.log(aaaa)//40
}
console.log("trying to acces const outside of block in next upcoming line");
console.log("let is access from outside"+aaaa);//error

let bb;
{
    let bb=10;
    console.log(bb);//10
}
console.log(bb)//undefind

var cc;
{
    var cc=45;
    console.log(cc);//45

}
console.log(cc);//45
