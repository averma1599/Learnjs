

// const arr = [1,2,3,4,5,6]

// for(const num of arr){
//     console.log(num)
// }

// let fun = "having fun";

// for(const str of fun){
//     console.log(`Each chars : ${fun}`)
// }


// Maps 

// const map = new Map()
// map.set("IN", "India")
// map.set("USA", "united states of america")
// // console.log(map)

// for(const [iter, value] of map){
//     console.log(iter, " : ", value)
// }

// const myobject = {
//     name : "Ashis",
//     lastname : "verma"
// }

// for(const key of myobject){
//     console.log(key)
// } 

// const object2 = {
//     ph : "PhoneNumber",
//     add1 : "Primary address"
// }

// for(const key in object2){
//     console.log( `${key}: ${object2[key]}`)
// }

// const arr = ["Ashish", "verma"];

// for(const value in arr){
//     console.log(arr[value]);
// }


// Object for in 
// Array - for of

//forEach loop 

// const coding = ["js", "java", "python", "c++"]

// coding.forEach((item)=>{
//  console.log(item)
// })
// /////
// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr)
// })

const code2 = [
    {
        name : "Ashish",
        lastName : "verma "
    },
    {
        name : "manish",
        lastName : "verma "
    },
    {
        name : "Manoj",
        lastName : "verma "
    }
]

// code2.forEach((item)=>{
//     console.log(item.name);
// })
//Filter -----------------------------------------
const result = code2.filter((item)=> item.name == "Ashish")
console.log(result)

// let coding = ["js", "java", "python", "c++"]

// // coding.filter((num)=> num > 4) // return value 

// //with {}

// const filterarray = coding.filter((num)=>{
//     return num > 4
// })

// console.log(filterarray)


