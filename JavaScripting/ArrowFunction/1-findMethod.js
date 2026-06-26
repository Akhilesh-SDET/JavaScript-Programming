let num = [34, 12, 21, 76, 83, 92, 18];

function fun(val) {
    return val > 80
}


let res = num.find(fun)
console.log(res);//83

let res1 = num.find((val) => {
    return val > 80;
})
console.log(res1);

let res2 = num.find(val =>
    val > 80
);
console.log(res2);