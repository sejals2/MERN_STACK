//write a code to display a string in reverse order

const originalStr="sejal";

function reverseStr(str){
    const reversedString=str.split("").reverse().join("");
    return reversedString;
}

console.log(reverseStr(originalStr));