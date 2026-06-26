//array methods
let fruitList=["apple","mango","banana","apple","grapes"]

//1.length parameter
console.log(fruitList.length);//
console.log(fruitList.length-1)

//2-push() method

fruitList.push("pieaanapple","muskmelon")
console.log(fruitList)

//3-pop() method
fruitList.pop()//
console.log(fruitList)

//4-shift() method
fruitList.shift();
console.log(fruitList)


//5- indexOf() method
console.log(fruitList.indexOf("apple"));//0
console.log(fruitList.indexOf("apple",1));//2
console.log("Banana");// -2
console.log("banana");//2
console.log(fruitList.lastIndexOf("apple"))//4

//6- includes method
console.log(fruitList.includes("grapes"))//true
console.log(fruitList.includes("Grapes"))//false
console.log(fruitList.includes("guava"))//false


//7- slice() method

console.log(fruitList.slice(1,3));//[ 'banana', 'apple' ]
console.log(fruitList.slice(3,6))//[ 'grapes', 'pieaanapple' ]
console.log(fruitList.slice(3))//[ 'grapes', 'pieaanapple' ]
console.log(fruitList.slice(0))//[ 'mango', 'banana', 'apple', 'grapes', 'pieaanapple' ]

console.log(fruitList.slice(-4,-2))//[ 'banana', 'apple' ]
console.log(fruitList.slice(-2,-4))//[]
console.log(fruitList.slice(1,-3))//[ 'banana' ]
console.log(fruitList.slice(-6,2))//[ 'mango', 'banana' ]
console.log(fruitList.slice(4,2))//[]
console.log(fruitList.slice(-6))//[ 'mango', 'banana', 'apple', 'grapes', 'pieaanapple' ]

//join() method

console.log(fruitList.join())
console.log(fruitList.join(""))
console.log(fruitList.join(" "))
console.log(fruitList.join("-"))

//splice()

fruitList.splice(1,2)
fruitList.splice(1,2,"Pineapple","watermelon","muskmelon")
fruitList.splice(2,0,"orange")

console.log(fruitList)

let num =[34,12,21,76,83,92,18]

function fun(val){
    return val>80
}

let res = num.find(fun)
console.log(res)

let res = num.find((val)=>{
    return val>80
})

console.log(res);

let res = num.fin