let obj={
    "std-id" : 101,
    'std name' : "chintu",
    1 : 'male',
    age : 23
}

// console.log(obj)//{ 'std-id': 101, 'std name': 'chintu', gender: 'male', age: 23 }
// console.log(obj.std-name);//error
//console.log(obj['age']);//23

// console.log(obj.std-id)//error b/z dot follow identifier rule
// console.log(obj.std name)//error
// console.log(obj.1)//error
// console.log(obj["std-id"])//101
// console.log(obj["std name"])
// console.log(obj["1"])

let obj1={
    username:"Akhil",
    phno:83829384737
}

let a="username";
// console.log(a)//username
// console.log(obj1.a)//error
// console.log(obj1.username)//error
console.log(obj1[a])//Akhil
console.log(obj1['username'])//Akhil


let c='username';

let x={
    [c]:'Vikash'
}
console.log(x['username'])
console.log(x.username)