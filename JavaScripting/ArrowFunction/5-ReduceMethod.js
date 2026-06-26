//Reduce Method
let arr=[5,6,3,7];
let res=arr.reduce((acc,val)=>{
    return acc+val;
})
console.log(res)



let arr1=[5,6,3,7];
let res1=arr1.reduce((acc,val)=>{
    return acc+val;
},100)
console.log(res1);