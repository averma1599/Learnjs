//-----------var---------//
//SC-1
// console.log(a)
// abc()

// function abc(){
//     console.log("Good morning!");
  
// }
// // a = 5;
// var a=5;
// output : Undefined \n Good morning!
// because var has global scope but variable can only be hoisted as declaration not with value

//-----------let----------------//
//SC-2

// let a;
// console.log(a)
// abc()

// function abc(){
//     console.log("Good morning!");
   
// }
// let a = 5;
 
// output : cannot access 'a' before Initialization
// Beacuse : a will get hosted technically but couldn't initialize before print so that will go under temp. dead zone.

//SC-3

// let a;
// console.log(a)
// abc()

// function abc(){
//     console.log("Good morning!");
// }

//Output : Undefined \n Good morning !
//Beacuse : Declaration done but value is not defined.

//SC-4
// let a;
// console.log(a)
// abc1()

// const abc = ()=>{
//     console.log("Good morning!"); // cannot access abc bcz with const or let 
// }

// let abc1 = function(){
//     console.log("Good morning!"); // cannot access abc1
// }
// //Output : cannot access abc bcz with const or let 
// Beacuse : Function expression and class expression are not hoisted.


