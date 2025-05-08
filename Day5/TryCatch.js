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
        throw new Error("Cannot divide by zero");// Custom Error
      }
      return a / b;
    } catch (error) {
      if( error instanceof SyntaxError){
        console.log("Syntax Error :", error.message);
      }
      else{
        console.error("General :", error.message);
      }
    }
    // finally{
    //     console.log("Operation is complete");
    // }
  }
  // console.log(divideNumbers(0,10)); // Output: Error: Cannot divide by zero
  
  // console.log(divideNumbers(10, 0)); // Output: Error: Cannot divide by zero
  
  //Nested Try Catch
  function NesteddivideNumbers(a, b) {
    try {
      try {
        if (b === 0) {
          throw new Error("Cannot divide by zero");// Custom Error
        }
        
      } catch (error) {
        console.log(error.message);
      }
      return a / b;
    } catch (error) {
      if( error instanceof SyntaxError){
        console.log("Syntax Error :", error.message);
      }
      else{
        console.error("General :", error.message);
      }
    }}

    console.log(NesteddivideNumbers(18,2));

//Specific Error Handling
try {
  // Code that may cause an error
} catch (error) {
  if (error instanceof TypeError) {
    console.error("Type Error:", error.message);
  } else if (error instanceof ReferenceError) {
    console.error("Reference Error:", error.message);
  } 
  else if(error instanceof SyntaxError){
    console.error("Syntax Error:", error.SyntaxError);
  }
  else {
    console.error("Unknown Error:", error.message);
  }
}
