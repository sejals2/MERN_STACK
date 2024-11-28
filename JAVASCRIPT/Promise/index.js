//sync promise
let fpromise=new Promise( (resolve,reject)=>{
    console.log('hello');
   // resolve(3454);
    reject(new Error("internal server error"));
});



//async promise
let spromise=new Promise((resolve,reject)=>{
    setTimeout(function sayMyName(){
      console.log("my name is sejal");
    },5000);
    return 1;
});

//then && catch
let promise=new Promise((resolve,reject)=>{
    let success=true;
    if(success){
        resolve("promise fullfilled");
    }
    else{
        reject("promise rejected");
    }
});

promise.then((message)=>{
    console.log("the message is :"+message);
}).catch((error)=>{
    console.log("error:"+error);
});


//multiple promises ocuuring concurrewntly handled by promiseall()

let promise1 =new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"first");
});

let promise2 =new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"second");
});

let promise3 =new Promise((resolve,reject)=>{
    setTimeout(resolve,3000,"third");
});

Promise.all([promise1,promise2,promise3])
.then((values)=>{
   console.log(values);
}).catch((error)=>{
    console.error("error"+error);
})