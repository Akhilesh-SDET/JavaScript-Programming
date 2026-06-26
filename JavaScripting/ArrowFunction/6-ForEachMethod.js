//forEachMethod
let arr=[5,6,2,3];

arr.forEach(val=>{
    console.log(val)
})

//===========================Return not possible but map return is possible=======================

let arr1=[5,6,2,3];

let res = arr1.forEach(val=>{
    return val;
})

console.log(res);//undefined

//map() return new array with transform element
//forEach() return undefined

