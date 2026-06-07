//Objects
//Two ways to create object
//1.Through object literals--->{}
//2.Through object constructor

//through object literals
let student = {
    std_id : 101,
    name : "pushkar",
    gender : "male"
}

//Reading
console.log(student);//{ std_id: 101, name: 'pushkar', gender: 'male' }
console.log(student.std_id);//101
console.log(student.name);//pushkar
console.log(student.gender);//male

//Addition operation
student.phno=1236547895;
student.address="Btm";
console.log(student.phno);
console.log(student.address);

//Updation
student.name='vikash';
console.log(student.name);

//Deletation
delete student.phno;
console.log(student.phno)//undefined

//======================================object creation through constuctor===================
let emp= new Object({
    emp_id :101,
    empName :"Akhilesh",
    gender :"male"
});
console.log(emp.empName);
console.log(emp.emp_id);
console.log(emp.gender);
