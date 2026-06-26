let t1={
    name:"Multiplex",
    id:"M01"
}

let t2={
    name:"PVR",
    id : "P01"
}

let t3={
    name : " inox",
    id : "I01"
}

function bookTicket(moviename,seats){
    console.log(`${moviename} is booked for ${seats} in ${this.name}`)
}

//through call method binding the this keyword explicitly with object
bookTicket.call(t1,"KGF",4);
bookTicket.call(t3,"KGF",4);
bookTicket.call(t2,"KGF",4);

bookTicket.apply(t1,["Dhurandhar",2])
bookTicket.apply(t2,["Dhurandhar",2])
bookTicket.apply(t3,["Dhurandhar",2])

//bookTicket.bind(t1,"pushpa",2)

let fun =bookTicket.bind(t1)
fun()
fun("puspa",2);