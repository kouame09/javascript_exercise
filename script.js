 //Exercises 1
 
//  function equale (nb1, nb2){
//     if (nb1 === nb2){
//         return  true;
//     }else {
//         return false;
//     }
//  }

//  console.log(equale(1,5));


//Exercises 2

// let arr =['apple', 'banana', 'orange']; 

// function getFirstElement(arr) {
//     if (arr.length === 0) {
//       return undefined; 
//     }
//     return arr[0];
//   }

// console.log(getFirstElement(arr));


//Exercises 3

//  let arr =['apple', 'banana', 'orange']; 

//  function getLastElement(arr) {
//     if (arr.length === 0) {
//        return undefined; 
//      }
//      return arr[arr.length - 1];
//    }

//  console.log(getLastElement(arr));



//Exercises 4

let arr =[10, 5, 8, 22, 17]; 

function findLargestElement(arr) {
    if (arr.length === 0) {
      return undefined; 
    }
  
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
  
    return largest;
  }

  console.log(findLargestElement(arr));


//Exercises 5

// let arr = [
//     { name: "John", age: 21, budget: 23000 },
//     { name: "Steve", age: 32, budget: 40000 },
//     { name: "Martin", age: 16, budget: 2700 }
// ];

// function getBudgets(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i].budget;
//     }
//     return sum;
// }

// console.log(getBudgets(arr));

