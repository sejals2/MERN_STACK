//Write a program that takes a string and prints out the number of vowels in the string.

function findVowels(str){
    const vowels=['a','e','i','o','u'];
    let count=0;

    for(let i=0;i<str.length;i++){
      if(vowels.includes(str[i].toLowerCase())){
        count++;
      }
    }
    return count;
}

console.log(findVowels('sejal'));
console.log(findVowels('shingote'));
console.log(findVowels('javascript'));
console.log(findVowels('house'));
console.log(findVowels('peels'));