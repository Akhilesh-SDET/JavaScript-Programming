let arr =[3,6,7,9,1,8];

//let a=arr.map(val=>val*10)
//let a=arr.map(val=>val*10);

let a = arr.map((val,index,arrRef)=>{
    return arrRef[index]=val*val
});

console.log(a);
console.log(arr);
