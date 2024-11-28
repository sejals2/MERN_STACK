//Write a program that takes a number and calculates the sum of all numbers from 1 to that number.

function cal(num){
    let sum=0;
    for(let i=0;i<=num;i++){
        sum+=i;
       
    }
    return sum;
}
console.log(cal(8));
console.log(cal(9));
console.log(cal(6));
console.log(cal(56));