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
async function jewl(){
        try{
            const res= await fetch('https://fakestoreapi.com/products/category/jewelery');
            const data= await(res.json());
            console.log(data);
            data.map(cate=>{
                console.log(cate.title);
            })
        }
        catch(error){
            console.log("Error: ",error);
        }
    }
    jewl();