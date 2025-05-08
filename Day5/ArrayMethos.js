//Adding and Removing into and from the array
let fruits=["apple","Mango","Banana"];
// fruits.push("newFruit");
// // console.log(fruits);// ["apple","Mango","Banana","newFruit"]
// fruits.pop();    //["apple","Mango","Banana"]
// fruits.unshift("newFruit");//["newFruit","apple","Mango","Banana"]
// fruits.shift(); //["apple","Mango","Banana"]
// console.log(fruits);

//Merging and slicing Array return the modified array
let moreFruits = ["pineapple", "mango"];
let allFruits = fruits.concat(moreFruits);
// console.log(allFruits); // Output: ["apple", "banana", "cherry", "pineapple", "mango"]
// //Slicing
// let sliced=allFruits.slice(1,3);
// console.log(sliced);
// let spliced=allFruits.splice(2,1,"kiwi");//(Start,delete,modified)
// console.log(spliced);

//Searching and Filtering
// let IndexOf=allFruits.indexOf("Mango");
// let IndexOf=allFruits.includes("Mango");
// let IndexOf=allFruits.find(res => res.startsWith("B"));

//FindIndex
// let IndexOf=allFruits.findIndex(res => res.startsWith("B"));

//Filter
// let filtered = allFruits.filter(fruit => fruit.length > 5);
// console.log(filtered); // Output: ["pineapple"]

// console.log(allFruits);

//Foreach
// allFruits.forEach(fruit => console.log(fruit));

//map return a new arry 
let mappedArr=allFruits.map(fru =>  fru);
// console.log(mappedArr);

//Sorting and Reversing
// allFruits.sort();
// allFruits.reverse();
// console.log(allFruits);

//filling and Copying
// console.log(allFruits);
// allFruits.fill("grape");
// console.log(allFruits);

//Reducing Arr
// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((acc, curr) => acc + curr, 0);
// console.log(sum); // Output: 15

//converting to string (join, toString)
// console.log(allFruits);
// console.log(allFruits.join(","));

//Creating arrays 
//Array.from()
let number= Array.from("1,2,3");
let NumArr=Array.of(1,2,4);
console.log(NumArr);