let table = 5;
// for (let i =1 ; i<=10 ; i++ ){
//     let result = table * i;
//     console.log(` ${table} x ${i} = ${result}  `);
// }



// const car = ["honda", "civic", "toyota", "audi"];
// for(let i =0 ; i < car.length; i++){
//     console.log(car[i]);
// }



// let i = 1;
// while(i <= 10){
//      let result = table * i;
//     console.log(` ${table} x ${i} = ${result}  `);
// }



// let i = 1;
// do{
//     let result = table * i;
//     console.log(` ${table} x ${i} = ${result}  `);
//     i++
//     }while(i<=10);

// let arr = [1,2,3];
// let arr1 = [1,2,3];
// console.log(arr == arr);
// console.log(arr == arr1);




// const pass ="P@sswo"
// if(pass.length >= 12 && pass.includes("@")){
//     console.log("the password is strong");
// }
// else if (pass.length>= 8 || (pass.includes("@") && pass.length>= 6) ){
//     console.log("password is long enough");
// }
// else{
//     console.log("passsword is not too long");
// }


// let objKey = Object.keys(person);
// let objvalues =  Object.values(person);
// let objEntries = Object.entries(person);

// console.log(objKey, objvalues, objEntries);



const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false
}
for(let x in person){

    console.log(`${x} : ${person[x]}`);
}

