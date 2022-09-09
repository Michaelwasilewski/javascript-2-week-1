// // // console.log();
// // // console.clear();
// // // console.warn();
// // // console.error();
// // // console.table();

// // // 1 

// // console.log("helle i am here");

// // const name = "Michael";
// // console.log(name);

// // const responseDataOne = [
// //     {
// //         name:"Michael",
// //         age:"28",
// //     }, 
// //     {
// //         name:"Emil",
// //         age:"29",
// //     }
// // ];
// // const responseDataTwo = [
// //     {
// //         name:"Michael",
// //         age:"28",
// //     }, 
// //     {
// //         name:"Emil",
// //         age:"29",
// //     }
// // ];
// // console.log("responseDataOne:",responseDataOne);
// // console.log("responseDataTwo:",responseDataTwo);
// // console.table(responseDataOne);

// // console.log(2+3);
// // console.log(1231*31230);

// // const sum = 1+2;

// // console.log("my " + "name " + "is " + "chika chika " + "slim Shady")

// // console.log(`My name is Mich ${sum}`);
// // // console.clear();

// // console.table();

// // let city = "Cairo";

// // console.log("City: " + city);
// // city = "oslo";
// // console.log("City: ", city);


// console.time(); // starts timer
// console.timeEnd(); // ends timer

// function counter (){
//     for(let i = 0; i <= 3; i++){
//         console.log(i);
//     }
// }
// console.time("myTimer");
// counter();
// console.timeEnd("myTimer");
// console.time("myTimer");
// counter();
// console.timeEnd("myTimer");
// console.time("myTimer");
// counter();
// console.timeEnd("myTimer");



function getCatFacts() {
    fetch('https://catfact.ninja/fact')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {});
  }
  
  getCatFacts();
  


// function sum(num1, num2) {
//     return num1 + num2;
// }
// let total = sum(1,2);
// let number1 = 10;
// console.log(number1);
// let number2 = 20;
// console.log(number2);

// console.log("total:", + total);


function getAverage(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}
let myAverage = getAverage(2, 3, 5);
console.log(myAverage)


function ArrayAvg(myArray) {
    var i = 0, summ = 0, ArrayLen = myArray.length;
    while (i < ArrayLen) {
        summ = summ + myArray[i++];
}
    return summ / ArrayLen;
}
var myArray = [1, 5, 2, 3, 7];
var a = ArrayAvg(myArray);
console.log(a)





// whem u make API call 


