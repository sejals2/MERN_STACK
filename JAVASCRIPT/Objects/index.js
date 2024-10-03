

console.log('lets start');

// object creation
// let rectangle={
//     length:1,
//     breadth:2,

// //method
// draw:function(){
//     console.log('drawing');
// }
// };

// //factory function
// function createRectangle(len, bre){
//     let rectangle={
//         length: len,
//         breadth: bre,
    
//     //method
//     draw(){
//         console.log('drawing');
//     }
// };
// return rectangle;
// }

// let rectObj1=createRectangle(5,6);
// let rectObj2=createRectangle(2,6);
// let rectObj3=createRectangle(7,9);



//constructor function -> Pascal Notation -> first letter of every word is capital

// function Rectangle(l,b){
//     this.length=l;
//     this.breadth=b;
//     this.draw=function(){
//         console.log('drawing');
//     }
// }

//   //object creation using constructor
// let rectangleObject=new Rectangle(1,3);

// //dynamic nature of objects->add or delete properties 
// rectangleObject.color='yellow';
// console.log(rectangleObject);

// delete rectangleObject.color;

// //for-in loop
// let rect={
//     leng:2,
//     brea:1,
// };

// for(let key in rect){
//     //keys are reflected through key variable
//     //values are reflecred through rect[key]
//     console.log(key,rect[key]);
// }

// //for-of loop
// for(let key of Object.entries(rect)){
//     console.log(key);
// }

//object cloning
  //1.Iteration
// let src={
//     a:20,
//     b:10,
//     c:30,
// };
// let dest={};

// for(let key in src){
//     dest[key]=src[key];
// }

// console.log(dest);

// src.a++;
// console.log(dest);

 //2.Assign
//  let src={
//     a:10,
//     b:20,
//     c:30,
//  }
 //  let src2={value:29};
//  let dest=Object.assign({},src,src2);

//  console.log(dest);

  //3.Spread
  let src={
    a:10,
    b:20,
    c:30
  }

  let dest={...src};
  console.log(dest);

 
