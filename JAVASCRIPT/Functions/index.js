//function defining
function run(){
    console.log('running');
}
//function call
run();

//named function assignment
let stand=function walk(){
    console.log('walking');
};

//anonymous function assignment
let stand2=function(){
    console.log('walking');
};

stand();

let jump=stand;
jump();

stand2();

//arguments
function sum(a,b){
    let total=0;
    for(let value of arguments)
        total=total+value;
    return total;
};

let ans=sum(1,2,3,4,5);
console.log(ans);

//default parameters
function interest(p,r=5,y){
    return p*r*y/100;
}
console.log(interest(1000,10,5));

//rest opereator(...)
function sum(num,val,...args){
    console.log(args);
}
sum(1,2,3,4,5,6,7);



//GETTER-SETTER
//getter-> access properties
//setter-> change or mutate properties

let person={
    name:"sejal",
    lName:"shingote",
    get fullName(){
        return `${person.name} ${person.lName} `
    },
    set fullName(value){
          let parts=value.split(" ");
          this.name=parts[0];
          this.lName=parts[1];
    }
};


console.log(person.fullName);

try{
    person.fullName=1;
}
catch (e){
    alert("you have enter a number in full name");
}

//Try-catch : error handling