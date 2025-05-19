function add(a,b) {
    return a+b;
}
function div(a,b){
    if(b==0){
        return "Error: Cannot be divided by Zero";
    }
    return a/b;
}
// export default div;
// export {add,div}
module.exports={add,div}


