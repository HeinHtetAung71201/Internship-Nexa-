function add(a,b) {
    return a+b;
}
function div(a,b){
    return a/b;
}
//For Common Js Module

// console.log(div(3,2));
//common js module for single access
// module.exports=div;
//For more than one, export must be an object for these
module.exports={add,div};