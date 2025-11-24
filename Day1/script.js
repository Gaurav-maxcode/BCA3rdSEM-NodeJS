// console.log("start00");

// setTimeout(() => {
//   console.log("2sec in future");
// }, 2000);

// console.log("END");

// -------------------------------------------------------------------------------

// let num = 1;

// setTimeout(() => {
//   num = 5;
// }, 5);

// setTimeout(() => {
//   console.log("A:", num);
// }, 0);

// console.log("B:", num);

//-------------------------------------------------------------------------------------------

// console.log("STEP1");

// setTimeout(() => {
//   console.log("STEP2");
// }, 0);

// setTimeout(() => {
//   console.log("STEP3");
// }, 500);

// setTimeout(() => {
//   console.log("STEP4");
// }, 0);

//------------------------------------------------------------------

// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 0);

// setTimeout(() => {
//   console.log("C");
// }, 0);

// setTimeout(() => {
//   console.log("D");
// }, 0);

//----------------------------------------------------------------------------------------------

// function greet(name, callback) {
//   console.log("Hello," + name);
//   callback();
// }
// function askquestion() {
//   console.log("How are you?");
// }

// greet("user", askquestion);

//-----------------------------------------------------------------------------------------

//promise in JavaScript
//A promise is an object that represents thr eventual completion (or Failure)
//of an asynchronous operation and its resulting values.

//it helps manage asynchronous tasks in a cleaner way than callbacks.

//A promise has 3 states:
//Pending - initial state, operation not finished.
//Fulfilled - operation completed sucessfully.
//Rejected - operation failed.

// Async/Await in JavaScript.

// Async makes your function wait-friendly.
// it means the function can use await, and it automatically return a promise.

//Await

//await tells javascript:
//"stop here until this work is finished."
//(But only work inside an async function.)

// function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("wether data");
//       resolve(200);
//     }, 2000);
//   });
// }

// async function getWetherData() {
//   await api();
// }

//-------------------------------------------------

function greetUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Welcome!");
      resolve(200);
    }, 2000);
  });
}

async function greeting() {
  console.log("Hello.");
  await greetUser();
}

greeting();
