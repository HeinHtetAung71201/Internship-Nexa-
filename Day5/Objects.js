// Obj Notation
// const objName={
//     Key: Value,
//     Key: function(){

//     },
//     key: ["value","value"],
// }

// Obj Constructor
const car= new Object();
car.model="ToYaTa";
car.year=2000;
// console.log(car);
// console.log(typeof(car));
// console.log(car.model);

// using Object.create(prototype obj)
const prototypeObj={
    type: "Human",
    describe(){
        return "I'm a "+this.type
        +" And My name is "+this.name;
    }
}
const student= Object.create(prototypeObj);
student.name="Alice";
student.age=20;
student.address="Monywa";
student.edu="Mid";
student.mobile=93494;
// Object.freeze Prevent modification
// Object.seal prevent addition or deleting but allow modification
const freezeStudent=Object.freeze(student);
// console.log(freezeStudent);
freezeStudent.name="MgMg";
// console.log(student);
// console.log(student.describe());
// delete student.age;// delete the obj
// console.log(student);

//Looping through obj 
// using for..in
// for(let key in student){
//     console.log(key + ":"+student[key]);
// }

// using object.keys()
let keys= Object.keys(student);
let values=Object.values(student);
let entries= Object.entries(student);
// console.log(keys);
// console.log(values);
// console.log(entries);//with name and value pair

//another obj
// const car={
//     brand : "Honda",
//     model : "Fit",
//     year: 2011
// }
const personal={...student,...car};
// console.log(personal);

// function displayInfo({name,...personal}){
//     student.name=name;
//     console.log(student.name);
//     console.log(Object.values(personal));
// }
// displayInfo("HeinHtet");
// console.log(student);
// console.log(Object.values(student));

//Object.assign()
const obj1Target={a:1,b:2};
const obj2Source={c:3,d:4};
Object.assign(obj1Target,obj2Source);
// console.log(obj1Target);

// Factory Functions for objects
function createUser(name,age){
    return{
        name,
        age,
        greet(){
            return `Hello ${name}`;
        }
    }
}
let user1=createUser("KoHein",23);
console.log(user1);
console.log(user1.name);
console.log(user1.greet());
console.log(typeof(createUser));