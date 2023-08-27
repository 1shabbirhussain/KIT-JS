// //for each

// // let arr = [1,2,3,4,5];

// // arr.forEach((element)=>{
// // console.log(element);
// // })




// //dom------

// const getQueryByID = document.querySelector("#h2");
// const getQueryByTag = document.querySelectorAll("h1");
// const getQueryByClass = document.querySelectorAll(".heading");
// // console.log(getQueryByID);
// // console.log(getQueryByTag);
// // console.log(getQueryByClass);


// const getElementById = document.getElementById("h2")
// const getElementByClass = document.getElementsByClassName("heading")
// // console.log(getElementById);


// // let getQueryByClassValue = getQueryByClass.innerHTML
// // console.log(getQueryByClassValue)
// getQueryByClass.forEach(element => {
//     console.log(element.innerHTML);
// });


// // ye wala code nahi chal rha kyunky getleemnt by id pe for each ka function hi nahi chal rha ajeeb
// // getElementByClass.forEach(element => {
// //     console.log(element.innerHTML);
// // });

// let content = document.querySelector(".para");
// let name  = ["ali", "umer", "bilal"];

// name.forEach(element => {
// content.innerHTML += `<h2 style="display:inline;"> ${element} </h2>`    
// });


// // set attribute
// let setattribute = document.querySelector(".heading");
// setattribute.setAttribute(
//     "id", "h1"
// )

// let gettingh1 = document.getElementById("h1");
// gettingh1.innerText = "meri pehli heading"
// console.log(gettingh1.id);
// gettingh1.id = "h11";
// console.log(gettingh1.id);


let para = document.querySelector("p");

// console.log(para.classList.toggle("success"));
para.classList.toggle("success")
para.classList.toggle("success")


// para.forEach(element => {
//     if (element.textContent.includes("error")){
//         element.classList.add("error");
//     }
//     else if (element.textContent.includes("success")){
//         element.classList.add("success");
//     }
//     else{
//         element.classList.add("normal");
//     }
// }
// );
