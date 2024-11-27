//EVENT TARGET

// function changeText(){
//    let fpara=document.getElementById('fpara');
//    fpara.textContent="hello sejal";
// }
// let fpara=document.getElementById('fpara');
// fpara.addEventListener('click',changeText);

// fpara.removeaddEventListener('click',changeText);

//DEFAULT ACTION
let anchorElement=document.getElementById('anchor');
anchorElement.addEventListener('click', function(event){
    event.preventDefault();
    anchorElement.textContent="click done done";

});

//AVOIDING TO MANY LISTNERS


let paras=document.querySelectorAll('p');

function alertPara(event){
    alert("you have clicked on para:"+ event.target.textContent);
}

// for(let i=0;i<paras.length;i++){
//     let para=paras[i];
//     para.addEventListener('click',alertPara);
// }

let mydiv=document.getElementById('wrapper')
mydiv.addEventListener('click',alertPara);