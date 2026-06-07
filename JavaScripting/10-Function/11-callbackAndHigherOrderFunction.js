function sq(radius){
return radius*radius;
}

function res(radius,fun){
    return fun(radius);
}
console.log(res(5,sq));

//----------------------------------------------------
function area(radius){
    return Math.PI*radius**2;
}

function circule(radius, func){
    return func(radius)
}
console.log();