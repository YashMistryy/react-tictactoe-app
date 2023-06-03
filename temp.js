/* eslint-disable no-constant-condition */
// if('a'&& 'O'){console.log("this is a valid condition!")}

// using map\filter to get non-null value from array

let myArr = [1,2,3,4,5,null,6,7,null]

// let secondArr = myArr.filter((val)=>{
//     console.log(val)
//     if(val){return 1}
// })
 
let secondArr = myArr.map(()=>{return null})
myArr = secondArr
console.log(myArr)