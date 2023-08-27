// function pehlaFunc(){
//     console.log("abdure rehman bawla")
//     console.log("function yahan par khtm agey return dega")
//     return  ;

// }

// const a = pehlaFunc();
// console.log(a);




// let add2 = ()=>{
//     let a = 2;
//     let b = 2;
//     return a+b;
// }

// let add1 = ()=> add2;

// let add = () => add1;

// const a = add()()();
// console.log(a);



// ----------------------

// tax calculation function 


// let calculateProductTax = (product, tax) => {
//     let total = 0;
//     let totalProduct = 0;
//     for (let i = 0; i < product.length; i++) {
//         total += product[i] + product[i] * tax;
//         totalProduct += product[i];

//     }
//     return {
//         productPriceWithTax: total,
//         productPriceWithoutTax: totalProduct
//     }
// }

// let calculateTax = calculateProductTax([50, 100, 200], 0.2);
// console.log(calculateTax);


// --------------------



// let calculateProductTax = function(product, tax) {
//     let total = 0;
//     let totalProduct = 0;
//     for (let i = 0; i < product.length; i++) {
//         total += product[i] + product[i] * tax;
//         totalProduct += product[i];

//     }
//     return {
//         productPriceWithTax: total,
//         productPriceWithoutTax: totalProduct
//     }
// }

// let calculateTax = calculateProductTax([50, 100, 200], 0.2);
// console.log(calculateTax);


// --------------


// function calculateProductTax(product, tax) {
//     let total = 0;
//     let totalProduct = 0;
//     for (let i = 0; i < product.length; i++) {
//         total += product[i] + product[i] * tax;
//         totalProduct += product[i];

//     }
//     return {
//         productPriceWithTax: total,
//         productPriceWithoutTax: totalProduct
//     }
// }

// let calculateTax = calculateProductTax([50, 100, 200], 0.2);
// console.log(calculateTax);





const person = {
    firstName: "Shabbir",
    lastName: "Hussain",
    age: 0,
    blog: [
        { name: "Shabbir", age: 20, city: "Karachi" },
        { name: "Shabbir", age: 20, city: "Karachi" },
        { name: "Shabbir", age: 20, city: "Karachi" },
        { name: "Shabbir", age: 20, city: "Karachi" },
    ],

    printFunc(){
        for (let i = 0; i < this.blog.length; i++) {


            console.log(` ${this.blog[i].key} : ${this.blog[i].value}`);
            console.log(` ${this.blog[i].key} : ${this.blog[i].value}`);
            console.log(` ${this.blog[i].value} : ${this.blog[i].value}`);
            console.log();
          }
    }

    
    //   fullName:()=>{
    //     let namee = person.firstName +" "+ person.lastName;
    //     return namee
    //   }
};

console.log(person.printFunc());

// console.log(person.fullName());

// console.log(`First Name: ${person.firstName}`);
// console.log(`Age: ${person.age}`);

// const age = person.age ? person.age : 50;

// const age1 = person?.age ?? 50;

// const age2 = !person.age && 50;

// console.log(`age is :${age} \nage1 is :${age1} \nage3 is :${age2} `);

// person.age = 55;
// console.log(person.age);

