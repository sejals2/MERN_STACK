// async function getData(){

//     setTimeout(function(){
//         console.log("i am inside set timeout block")
//     },3000);

// }
// getData();


//await
//fetch api
async function getData() {
    //get request -async
    let response=await fetch('https://jsonplaceholder.typicode.com//comments?postId=1');
    //parse json- async
    let data=await response.json();
    console.log(data);
}
getData();
