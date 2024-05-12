// Sc-1 

// function sum(a, b){
//     // console.log(a+b);
//     let x = typeof(a);
//     let y = typeof(b);
//     if(x == "number" && y == "number")
//         {
//             return a+b
//         }
//      else console.log("Arg1 or arg2 is not a number")
// }

// console.log(sum(2, 6));
// console.log(sum("asc", 6));
// console.log(sum(2, null));
// console.log(sum(2, NaN));
// console.log(sum(undefined, 6));


//SC-2


// function sum(a, b){
//     // console.log(a+b);
//     if(!a && !b){
//         console.log("Please enter some arguments");
//         return
//     }else{

//     if(typeof(a) && typeof(b) != "number")
//         {
//             console.log(`Arg1 or arg2 is not a number\n arg1 : ${a} \n arg2 : ${b}`);
//         }
//      else {
       
//         return a+b
//      }}
// }

// console.log(sum(2, 6));
// console.log(sum("asc", 6));
// console.log(sum(2, null));
// console.log(sum(2, NaN));
// console.log(sum(undefined, 6));

//-----------SC - rest or Spread operator 

// return array of all the arguments 

// function sum(...a){
//     return a
// }
// console.log(sum(1,2,3,4,5,77,34))

// output : array of arguments 

//SC- bject 

// const abc = {
//     username : "Ashish",
//     email : "xyz@gmail.com"
// }

// function printDetails(any){
//     return any.username
// }

// console.log(printDetails(abc));

//WithArray 

// const arr1 = [1,2,3,4,5]

// function printArray(arrayparam){
//  return arrayparam[4];
// }

// console.log(printArray(arr1))

// this keyword in function 

// const user = {
//     username: "ashish",
//     price : 999,
//     message : function(){
//         console.log(`${this.username}, having fun`);
//     }
// }

// user.message()
// console.log(this.user);
// console.log(user)
// user.username = "verma"
// user.message()


// function fun(){
//     let username = "ashish"
//     console.log(this.username);
// }

// fun() // undefined coz inside function cannot use this. this can be used from an object pointing to current object

// Arrow function 

// const sum = (a , b) => {
//     return a+b;
// }

// console.log(sum(3, 4));
// let num = 3
// let num2 = 4

// const abc = (num, num2) => (num +num2)

// console.log(abc(3, 4))


//----------IIFE [Immediately involked function expression]-----------

// (function abc(){
//     console.log(`Sucess`);
// })(); // End the function expression here

// ((name) => {
//     console.log(`success2 ${name}`)
// })

// ("Ashish")

// (()=>{
//     console.log("Hello")
//     })
//     ();
    




