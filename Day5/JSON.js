//JSON And JS object

//Json Syntax
const data='{"Name":"KoHein","Age":23,"Job":"developer"}';
//JS object
const obj={
    Name:"KOHein",
    Age: 23,
};

//Converting JSON to obj (Parsing)
// console.log(typeof(data));
const user = JSON.parse(data);
// console.log(user.Age);

//obj to JSON String (stringify)
// const jString= JSON.stringify(obj);
//Can format the json using the third argus
const jString= JSON.stringify(obj,null,2);
// console.log(typeof(obj));
// console.log(jString);
// console.log(typeof(jString));

//json with fetching API
// async function jewl(){
//         try{
//             const res= await fetch('https://fakestoreapi.com/products/category/jewelery');
//             const data= await(res.json());
//             console.log(data);
//             data.map(cate=>{
//                 console.log(cate.title);
//             })
//         }
//         catch(error){
//             console.log("Error: ",error);
//         }
//     }
//     jewl();

const users = [
    { "name": "Alice", "age": 25 },
    { "name": "Bob", "age": 20 },
    { "name": "Charlie", "age": 30 }
  ];
  
  const youngUsers = users.filter(user => user.age < 30);
//   console.log(youngUsers);
  
const prof = { "name": "Alice", "age": 25 };
prof.age = 26;
// console.log(typeof(prof));
// console.log(JSON.stringify(prof));
// console.log(typeof(prof));

//Nested JSON
const usersData = {
    "name": "Alice",
    "address": {
      "city": "New York",
      "zip": "10001"
    }
  };
  
  // Accessing nested values
  console.log(usersData.address.city); // Output: "New York"
  
  // Modifying nested values
  usersData.address.city = "Los Angeles";
  console.log(JSON.stringify(usersData));
  

// Output: {"name":"Alice","age":26}
