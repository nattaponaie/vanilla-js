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

//---------------------------Currying------------------------//
// const curryUnaryFunction = a => b => c => a + b + c;
// console.log(curryUnaryFunction)
// console.log(curryUnaryFunction(1))
// console.log(curryUnaryFunction(1)(2))
// console.log(curryUnaryFunction(1)(2)(3))

// const curryUnaryFunction2 = a => b => callback => callback(() => a+b);
// function callbackFunction2(result) {
//     return result;
// }

// const curryUnaryFunction3 = a => b => callback => callback(a+b);
// function callbackFunction3(result) {
//     return result;
// }

// console.log(curryUnaryFunction2(1)(2)(callbackFunction2)())
// console.log(curryUnaryFunction3(4)(3)(callbackFunction3))
//----------------------------------------------------//

//------------------------ let, var ----------------------------//
// var counter = 30;

// function execute() {
//     var counter = 10;
//     if (true) {
//         if (true) {
//             var counter = 20;
//             console.log('execute 2 inner', counter)        
//         }
//     }
//     console.log('execute', counter)
// }

// if (counter === 30) {
//   let counter = 31;
//   console.log(counter);
// }

// console.log(counter);
// execute()
// counter = 28;
// execute();
// console.log(counter);

// function userDetails(username) {
//     if(username) {
//       console.log(salary); // undefined due to hoisting
//       console.log(age); // ReferenceError: Cannot access 'age' before initialization
//       let age = 30;
//       var salary = 10000;
//     }
//     console.log(salary); //10000 (accessible to due function scope)
//     // console.log(age); //error: age is not defined(due to block scope)
//  }
//  userDetails('John');

//--------------------- Temporal Dead Zone -------------------------------//
// var counter = 3;
// let counter4 = 4;
// function someMethod() {
//     console.log(counter1); // undefined
//     // console.log(counter2); // ReferenceError
//     // if (true) {
//     //     console.log(counter2)
//     // }

//     const functionA = () => console.log(counter2);
//     function functionB() {
//         console.log(counter2)
//     }
//     // functionA()
//     // functionB()
    
//     var counter1 = 1;
//     let counter2 = 2;
//     functionA()
//     functionB()

//     console.log(this)
// }

// someMethod();

// console.log(this)

// let a = '190';
// const b = 1;
// if (true) {
//     let a = '200';
//     console.log(a)

//     const b = 2;
//     console.log(b)
// }

// function functionA() {
//     console.log('functionA')
//     let a = '200';
//     console.log(a)

//     const b = 2;
//     console.log(b)
// }

// functionA()
// console.log(a)
// console.log(b)
//----------------------------------------------------//

//------------------------Class declaration----------------------------//

// function Bike(model, color) {
//     this.model = model;
//     this.color = color;
// }

// Bike.prototype.getDetails = function() {
//     return `${this.model} has ${this.color}`
// }

// const bike = new Bike('Suzuki', 'Red');
// console.log(bike.getDetails())
//----------------------------------------------------//

//------------------------ Closures ----------------------------//
// var age = 20;
// let nickname = 'Doe';
// function Welcome(name22){

//     let a = 'a';

//     function WelcomeInner(message){
//         let b = 'b';
//         var greetingInfo = function(message) {
//             let c = 'c';
//             var greeting = function(message) {
//                 var d = 'd'
//                 const functionTest = () => d;
//                 var greeting2 = function(message) {
//                     console.log(`${message} ${name22} has ${age} year oldm, his nickname is ${nickname} ${a} ${b} ${c} ${functionTest()}`);
//                 }
//                 return greeting2(message);
//             }
//             return greeting(message);
//         }
//         return greetingInfo(message);
//     }
//     return WelcomeInner;
// }
// var myFunction = Welcome('John');
// myFunction('Welcome ');
  

//------------------------ Promise ----------------------------//

// const promise = new Promise(resolve => {
//     setTimeout(() => {
//       resolve("I'm a Promise!");
//     }, 5000);
//   }, reject => {
  
//   });
  
//   promise.then(value => console.log(value));


// //   promise chaining
//   new Promise(function(resolve, _reject) {

//     setTimeout(() => resolve(1), 1000);
  
//   }).then(function(result) {
  
//     console.log(result); // 1
//     return result * 2;
  
//   }).then(function(result) {
  
//     console.log(result); // 2
//     return result * 3;
  
//   }).then(function(result) {
  
//     console.log(result); // 6
//     return result * 4;
  
//   });

// Promise.all
// const promise1 = new Promise(resolve => setTimeout(() => {
//     console.log('promise1')
//     resolve(1)
// }, 2000));
// const promise2 = new Promise(resolve => setTimeout(() => {
//     console.log('promise2')
//     resolve(2)
// }, 4000));
// const promise3 = new Promise((_resolve, reject) => setTimeout(() => reject('Error ja'), 1000));

// Promise.all([promise1, promise2])
// .then(result => {   
//     console.log(result) 
// }).catch(error => console.log(`Error in promises ${error}`))

// Promise.race

var promise1 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('solved one')
        resolve('one')
    }, 500);
});
var promise2 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('solved two')
        resolve('two')
    }, 200);
});

Promise.race([promise1, promise2]).then(function(value) {
  console.log(value); // "two" // Both promises will resolve, but promise2 is faster
});


//----------------------------------------------------//

//----------------------------------------------------//