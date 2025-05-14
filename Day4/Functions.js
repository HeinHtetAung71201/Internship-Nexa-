
        //primitive DataType

        //String
        //Number
        //Boolean
        //Null
        //Undefined
        //NaN

        //Non-Primitive (Reference) Data Types
        //Object
        //Array
        //Function
        //Date

       
        // let obj1={
        //     "name":"KH",
        //     "age": 23,
        // }
        // let obj2= {
        //     ...obj1
        // };
        // obj2.name="KoHein";
        // obj1.name="MyatMon";
        // console.log(obj1);
        // console.log(obj2);

        let string1="san kyi tar par";
        let string2=string1;
        console.log(string2);// san kyi tar par
        string2= "testing";
        console.log(string2);//


        //Function

        //Assigned with var
        // const greet= function(){
        //     console.log("Hello");
        // }
        // greet();

        // const greet = () => {
        //     console.log("Hello, World!");
        // };

        // greet();

        //implicit Return
        // const square = x => x * x;
        // console.log(square(5));

        // function sum(a, b) {
        // return a + b;
        // }

        // console.log(sum(3, 4)); // Output: 7

        //Default Parameter
        // function greet(name = "Guest") {
        // console.log(`Hello, ${name}!`);
        // }

        // greet();          // Output: Hello, Guest!
        // greet("Alice");   // Output: Hello, Alice!

        //Rest Parameter
        // function sum(...numbers) {
        // return numbers.reduce((acc, num) => acc + num, 0);
        // }

        // console.log(sum(1, 2, 3, 4)); // Output: 10

        //Anonymous Functions
        // setTimeout(function() {
        // console.log("This is an anonymous function.");
        // }, 1000);

        // (function() {
        // console.log("This runs immediately!");
        // })();

        //Higher Order Function
        // function calculate(operation,a,b){
        //     return operation(a,b);
        // }
        // function add(a,b){
        //     return a+b;
        // }
        // function minus(a,b){
        //     return a-b;
        // }
        // function multiply(a,b){
        //     return a*b;
        // }
        // console.log(calculate(multiply,4,3));

        // function fetchData(callback) {
        //     setTimeout(() => {
        //         console.log("Data fetched!");
        //         callback();
        //     }, 5000);
        //     }

        //     fetchData(() => {
        //     console.log("Callback executed.");
        //     });

        // function outer() {
        // let count = 0;
        // return function() {
        //     count++;
        //     console.log(`Count: ${count}`);
        // };
        // }

        // const counter = outer();
        // counter(); // Count: 1
        // counter(); // Count: 2

        //Constructor Function
        // function person(name,age){
        //     this.namae=name;
        //     this.age= age;
        // }
        // const KOHein= new person("HeinHtetAung",23);
        // console.log(KOHein.namae);

function fetchData(callback){
   
        const data ={
            user:'Joe'
        };
        callback(null,data);
}
function handleData(error,data){
    if(error){
        console.log("error", error);
    }
    else{
        console.log("Received data: ",data)
    }
}
// fetchData(handleData);

//Call back 
function twice (num, func){
    let result= func(num);
    console.log(result*2) ;
}
twice(3,function (x) {
    return x*x;
})