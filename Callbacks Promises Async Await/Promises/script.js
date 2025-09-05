//--fulfilled--
//--rejected--
//--pending--
// function getData(dataId, getNextData) {
//     let promise = new Promise((reject , resolve)=>{          
//     setTimeout(() => {
//         console.log("data", dataId);
//         resolve("success")
//         if (getNextData) {
//             getNextData();
//         }
//     }, 5000);
// })
// }
//--if resolved--
//promise.then((res)=>{})
    //--if rejected--
    //promise.catch((rej)=>{})

// const getPromise = () => {
//   return new Promise ((resolve , reject)=>{
//     console.log("i am a promise")
//     // resolve ("success")
//     reject("nework error");
//   })
// }
// let promise = getPromise();
// promise.then((res)=>{
//     console.log("fulfiled")
// })
//  promise.catch((err)=>{
//   console.log("rejected ")
//  })

 //--promisechains--
 function asyncFunc(){
  return new Promise ((resolve , reject)=>{
     setTimeout(()=>{
      console.log("some data")
      resolve("success")
     },5000);
  })
 }
  function asyncFunc1(){
  return new Promise ((resolve , reject)=>{
     setTimeout(()=>{
      console.log("some more data")
      resolve("more success")
     },5000);
  })
 }
 console.log("Loading")
 let p1 = asyncFunc()
 p1.then((res)=>{
  console.log(res)
    console.log("Loading")
     let p2 = asyncFunc1()
      p2.then((res)=>{
  console.log(res)
 })
 })