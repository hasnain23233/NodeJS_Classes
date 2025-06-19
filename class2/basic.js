///In this class we learn the basic fundamentail of node js like (varriable , funtions , conditions , loops , arrays , objects , funtion)

//declaire the varriables
let varriable1 = "This is node js second class"
console.log(varriable1)

//creating the funtions

function printTopVarriable() {
    console.log(varriable1, "USing with funtionsy;")
}
printTopVarriable()

///using arrays and object

let fruit = ['apple', 'banana', 'icecream']
console.log(fruit)
fruit.push('pear')
console.log(fruit)

let stuData = {
    name: 'Aslam',
    email: 'aslam@gmail.com',
    id: 30
}
console.log(stuData)
console.log(stuData.name)

/// conditions and loop

let isEmp = true;
if (isEmp) {
    console.log('Aslam is a employ man. He working in AIDCO as a full stack')
} else {
    console.log('oops: you are serching any job')
}

for (let i = 0; i < 4; i++) {
    console.log(i, "hasnain")
}
