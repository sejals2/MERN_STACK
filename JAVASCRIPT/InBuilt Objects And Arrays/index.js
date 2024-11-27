console.log('Hello ji');

let name='sejal';

let firstname=new String('sejal');


//template literal
let message=`Hello ${name},

Thanks for this opportunity

Regards, 
Sejal`;

console.log(message);


//date
let date1=new Date();
console.log(date1);

let date2=new Date('June 20 1998 07:23');
console.log(date2);

let date3=new Date(1998, 6, 20, 7);
console.log(date3);

date3.setFullYear(1947);
console.log(date3);

var d=new Date();
a=d.getDay();


//Arrays
let numbers=[1,4,5,7];
console.log(numbers);

console.log(numbers.indexOf(9));

if(numbers.indexOf(10)!=-1)
    console.log('present');

console.log(numbers.includes(7));

//callback function

let courses =[
    {no:1, name: 'sejal'},
    {no:2, name:'vaishii'}
];
console.log(courses);

// let course=courses.find(function(course){
//     return courses.name=='sejal';
// })

let course=courses.find(course=> course.name==='ram');
console.log(course);


//Removing elements from array
let nums=[1,2,3,4,5,6,7];

//end
nums.pop();
//beginning
nums.shift();
//middle
nums.splice(3,1);


//Empyting an array

let num=[1,2,3,4,5,6];
let num2=num;

//num=[];
//num.length=0;
num.splice(0,num.length);

console.log(num);
console.log(num2);

//concating arrays
let first=[1,2,3,4];
let second=[5,6,7,8];
let combine=first.concat(second);
console.log(combine);

//slicing
let marks=[10,20,30,40,50,60,70,80];
let sliced=marks.slice(2,6);
console.log(sliced);

//spread operator
let fir =[1,2,3,4];
let sec=[6,7,8];
let com=[...fir,'a','b',...sec,'true','c'];
console.log(com);

//iterating over array

//for-of loop
let arr=[10,20,30,40,50];
for(let value of arr){
    console.log(value);
}

//for-each loop
// arr.forEach(function(number){
//     console.log(number);
// });

arr.forEach(number=> console.log(number));

//joining array

let n1=[10,20,30,40,50];
const joined=n1.join(' ,');
console.log(joined);

//split
let msg='this is my first messagae';
let parts=msg.split(' ');
console.log(parts);

//sorting
let elements=[60,70,40,10,30];
elements.sort();
console.log(elements);

//filtering
let n2=[1,2,-2,-9];
// let filtered=n2.filter(function(value){
//     return value>=0;
// });

let filtered=n2.filter(value=>value>=0);
console.log(filtered);

//mapping arrays
let n3=[7,8,9,10];
let items=n3.map(value=>'student_no'+value);
console.log(items);

//mapping with object
let n4=[1,2,-6,-8];
let filtere=n4.filter(value=>value>=0);

// let item=filtere.map(function(num){
//     return {value:num};
// });

let item=filtere.map(num=>{value:num});
console.log(item);


//reducing an array
let ar=[1,2,3,4,5];
let total=0;

for(let value of ar){
      total=total+value;
}

console.log(total);