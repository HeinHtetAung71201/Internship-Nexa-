//used for error handling
//Syntax
// try {
//     // Code that may throw an error
//     let result = 10 / 10;
//     console.log(result);
//   } catch (error) {
//     // Code to handle the error
//     console.error("An error occurred:", error.message);
//   }
  
// function divideNumbers(a, b) {
//     try {
//       if (b === 0) {
//         throw new Error("Cannot divide by zero"); //throw error
//       }
//       return a / b;
//     } catch (error) {
//       console.error("Error:", error.message);
//     }
//   }
  
//   console.log(divideNumbers(10, 0)); // Output: Error: Cannot divide by zero

//Finally 
//finally block always run regardless of whether an erro was thrown or not
function divideNumbers(a, b) {
    try {
      if (b === 0) {
        throw new Error("Cannot divide by zero");// Custom Erro
      }
      return a / b;
    } catch (error) {
      console.error("Error:", error.message);
    }
    finally{
        console.log("Operation is complete");
    }
  }
  
  console.log(divideNumbers(10, 0)); // Output: Error: Cannot divide by zero
  