// in js , "this " keyword is a special reference that dynamically
//  points to the object context in which a function is invoked

// Global Context
// in global scope(non-strict mode) this refer to window
// console.log(this.window);

// Object method context
//In object, this refer to the value of object itself
// const person={
//     name:"KoHein",
//     greet(){
//         console.log("Hello my name is ",this.name)
//     }
// }
// person.greet();

// Constructor Function Context
// In constructor function or class, this refers to the value of new object 
// function car(make, model){
//     this.make=make;
//     this.model=model;
// }
// let bmw= new car("USA",2001);
// console.log(bmw.make);



// explicit Binding (call,apply,bind)
// explain detail

// call() 
// Synstax: functionName.call(thisArg,arg1,arg2....)
// thisArg is the object the you want to bind 
function introduce(language,age){
    console.log(`Hello I'am ${this.name} and year ${age} old and speak ${language}`);
}
let user={
    name:"KoHein",
}
// introduce.call(user,'english',23);

// apply()
// Syntax : func(thisArg, [...args])
// introduce.apply(user,['Eng',20]);

//bind()
// Syntax: const newFunc= funcName.bind(thisArg,arg1,arg2,...)
const IntoEnglish= introduce.bind(user,"Myanmar",23);
IntoEnglish();


// Arrow function Context
// arrow function do not have their own this. they inherit this from their enclosing lexical scope 
// const person={
//     name: "Kohein",
//     // greet: ()=>{
//     //     console.log("Hello ",this.name);
//     // }//underfined caz of arr function do not have their own this
//     // So let do this
//     greet: function(){
//        setTimeout(()=>{
//         console.log("Hello ", this.name);
//        },1000)
//     }

    // greet : function(){
    //     console.log("Hello ", this.name);
    // }//work
// }
// person.greet()

