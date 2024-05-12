// Creating promises 

// const promiseOne = new Promise((resolve, rejected)=>{
//     setTimeout(()=>{
//         console.log("Async task is complete");
//         resolve()
//     }, 1000)
// })
// // promise consume
// promiseOne.then(()=>{
//     console.log("promise consumed")
// })


// ------------- resolve promise with params

// const promiseTwo = new Promise((resolve, reject)=>{

//     const value = true;
//     if(!value){
//         resolve("Promise resolved")
//     }
//     else{
//         reject("Promise rejected")
//     }
// })

// promiseTwo.then(()=>{
//     console.log("Ashish")
// }).catch(()=>{
//     console.log("Something went wrong")
// })

// // or 
// .catch((err)=>{
//     console.log(err)
// })
//----------------------------------------------------

// const promiseThree = new Promise((resolve, reject)=>{

//     const abc = {
//         name : "Ashish",
//         lastName : "verma",
//         ID : 1234,
//         enrolledStatus : false 
//     }

//     if(!abc.enrolledStatus){
//         resolve(abc)
//     }
//     else{
//         reject("Error : something went wrong")
//     }
// }).then((user)=>{
//     console.log(user)
//     return user.name
// }).then((name)=>{
//     console.log(name)
// }).catch((err)=>{
//     console.log(err)
// })
// .finally(()=>{
//     console.log("Promise either resolved or rejected")
// })

//--------------------------------------------------------

// async function abc(){
//     try {
//         const result = await promiseThree
//     console.log(result)
//     } catch (error) {
//         console.log(error)
//     }   
// }

// abc()

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((resp)=>{
//     const jsonResp = resp.json();
//     return jsonResp
// }).then((data)=>{
//     console.log(data)
// })

