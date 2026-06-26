let arr =[100,150,101,210,330]//homogeneous array
console.log(arr);
console.log(arr[0])//100
console.log(arr[5])//undefined
console.log(arr[-1])//undefined

let arr1 =["hello",100,null,true,undefined]//heterogeneous
console.log(arr[4])
console.log(arr[2])
console.log(arr[0])

let carList = ["Tiago","Thar","Brazza","Toyota supra"];

//adding
carList[4]="BMW";
carList[5]="Benz"
carList[10]="Skoda"

//update
carList[0]="Innova"

//delete

delete carList[3]
console.log(carList);
console.log(carList[7]);
