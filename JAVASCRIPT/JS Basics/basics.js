

//arithematic operator
let a=1;
let b=2;
let c=a+b;
let d=a-b;
let e=a*b;
console.log(c);
console.log(d);
console.log(e);

//post-pre incr-dec operator
let x=5;
let y=10;
let ans1=(++x)*(--y);
let ans2=(x++)*(--y);
let ans3=(x++)*(y--);
let ans4=(++x)*(y--);
console.log(ans1,ans2,ans3,ans4)

//assignment operator
let num=23;
console.log(num+=2);
console.log(num-=2);
console.log(num/=2);
console.log(num*=2);

//comparison operators
let str='1';
let n=1;
console.log(str==n);
console.log(str===n);

//ternary operator
let age=12;
let status=(age>=18)? 'I can vote':'I cannot vote';
console.log(status);

//logical operators with non-boolean
console.log((false||"sejal"));

//bitwise operators
let p=2;
let q=3;
console.log(p&q);
console.log(p|q);

//if-else stmt
let marks=98;
if(marks>=90){
    console.log('A');
}
else if(marks>=80){
    console.log('B');
}
else if(marks>=70){
    console.log('C');
}
else if(marks>=60){
    console.log('D');
}
else{
    console.log('E');
}

//switch case
let z=2;
switch(z){
    case 1: console.log('A');
    break;
    case 2: console.log('B');
    break;
    case 3: console.log('C');
    break;
    default: console.log('D');
}

//for-loop
for(let i=0;i<5;i++){
    console.log(i);
}

//while-loop
let t=0;
while(t<=10){
    console.log(t);
    t++;
}

//do-while loop
let r=0;
do{
    console.log(r);
    r++;
}while(r<5);










