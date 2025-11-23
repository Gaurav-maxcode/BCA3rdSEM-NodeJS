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

function greet(name, callback) {
  console.log("Hello," + name);
  callback();
}
function askquestion() {
  console.log("How are you?");
}

greet("user", askquestion);
