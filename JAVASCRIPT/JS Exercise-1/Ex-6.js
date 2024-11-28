//Write a program that takes a number and checks whether it is positive, negative, or zero.

function checkNumber(num){
    if(num>0){
        console.log(`the ${num} is positive`);
    }else if(num<0){
        console.log(`the ${num} is negative`);
    }else{
        console.log(`the ${num} is zero`);
    }
}
 // Call the function with various test cases to see the output
  checkNumber(10); // Output: "10 is positive"
  checkNumber(-5); // Output: "-5 is negative"
  checkNumber(0); // Output: "0 is zero"
  checkNumber(1); // Output: "1 is positive"
  checkNumber(-1); // Output: "-1 is negative"



