//Common Js Module

// import div from './calc';
// const div=require("./calc")//for single imported
// console.log(div(12,3));
const calculation= require("./calc")//for multi imported
console.log("Addition : ",calculation.add(11,12));
console.log("Division :", calculation.div(12,3))