//---------------- call, apply, bind -----------------//

// var emp1 = {name: 'John', position: 'Boss'}
// var emp2 = {name: 'Doe', position: 'Boiya'}

// function empDetail(age) {
//     return `My name is ${this.name}, position: ${this.position}. I'm ${age} year old`
// }

// console.log(empDetail.call(emp2, 100))
// console.log(empDetail.apply(emp1, [10]))

// var displayEmp1 = empDetail.bind(emp1, 50)
// console.log(displayEmp1())
// var displayEmp2 = empDetail.bind(emp2, 55)
// console.log(displayEmp2())

//----------------------------------------------------//

//---------------- slice, splice -----------------//

// var sliceArr1 = [1,2,3,4,5,6,7];
// var first3 = sliceArr1.slice(0, 3)
// console.log('sliceArr1', sliceArr1)
// console.log('first3', first3)
// console.log('sliceArr1', sliceArr1)

// var from4 = sliceArr1.slice(4);
// console.log('from4', from4)

// var from3 = sliceArr1.slice(3,4);
// console.log('from3', from3);


// var spliceArr1 = [8,9,10,11,12];
// console.log('spliceArr1', spliceArr1)
// var from0to3 = spliceArr1.splice(0, 3);
// console.log('from0to3', from0to3)
// console.log('spliceArr1', spliceArr1)

// var spliceArr2 = [1,2,3,4,5,6,7,8];
// console.log('spliceArr2', spliceArr2)
// var from4 = spliceArr2.splice(4);
// console.log('from4', from4)
// console.log('spliceArr2', spliceArr2)

// var spliceArr3 = [1,2,3,4,5,6,7,8];
// console.log('spliceArr3', spliceArr3)
// var from2 = spliceArr3.splice(2, 1);
// console.log('from2', from2)
// console.log('spliceArr3', spliceArr3)

// var spliceArr4 = [1,2,3,4,5,6,7,8];
// console.log('spliceArr4', spliceArr4)
// var from2 = spliceArr4.splice(2, 2);
// console.log('from2', from2)
// console.log('spliceArr4', spliceArr4)

// var spliceArr5 = [1,2,3,4,5,6,7,8];
// console.log('spliceArr5', spliceArr5)
// var from2 = spliceArr5.splice(2, 4);
// console.log('from2', from2)
// console.log('spliceArr5', spliceArr5)

// var spliceArr6 = [1,2,3,4,5,6,7,8];
// console.log('spliceArr6', spliceArr6)
// var from4 = spliceArr6.splice(2, 1, 99,98,97);
// console.log('from4', from4)
// console.log('spliceArr6', spliceArr6)

//----------------------------------------------------//