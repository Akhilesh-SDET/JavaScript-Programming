//sort

// let num= [34,12,21,76,83,92,18];
// let num=["hello","heallo",'hi',"100",34,true];
let num=['c','d','e','a','b'];

let res=num.sort().sort((a,b)=>a-b);//asscending
console.log(res)
let res1=num.sort().sort((a,b)=>b-a);//decending
console.log(res1)

