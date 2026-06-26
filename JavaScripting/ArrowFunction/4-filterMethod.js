let arr=[1,2,3,8,9,4,6,7];

let b =arr.sort();
console.log(b);
console.log(arr[arr.length-1])


let arr1=[1,2,3,8,9,4,6,7];
let c=arr1[0];
arr1.filter(val=>{
        if(val>c){
            c=val;
        }
})

console.log(c)

//======================================FilterMethod======================
let a=[1,2,3,8,9,4,6,7];
a.filter(predicate)
