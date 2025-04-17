// console.log("hii");

// let students = ["chandan", "aksah", "vikash"];

// let result = students.map((s) => {
//   return `hii ${s}`;
// });

// console.log(result);

// let scores = [100, 200, 300];

// let newScores = scores.map((s) => {
//   return s + 100;
// });

//   scores.map((s) => {
//   s + 10;
// });

// console.log(scores);

// let numbers = [20, 40, 50, 11];

// let ans = numbers.filter((e) => {
//   return e % 2 != 0;
// });

// console.log(ans);

// let marks = [100, 500, 300, 600];

// let newMarks = marks.filter((mark) => {
//   return 1;
// });

// console.log(newMarks);

// let price = [100, 200, 300];

// let totalPrice = 0;
// for (let i = 0; i < price.length; i++) {
//   totalPrice = totalPrice + price[i];
// }

// console.log(totalPrice);

// let totalPrice = price.reduce((a, e) => {
//   return a + e;
// }, 100);

// console.log(totalPrice);

// fetch()

//array destructuring

// let nums = [10, 20,40,60,70];

// let number1 = nums[0];
// console.log(number1);
// let number2 = nums[1]

// let [,,,,,,,,,,,x] = nums;

// console.log(x);

// let student = {
//   studentName: "chandan",
//   rollNo: 100,
// };

// let studentName = student.studentName;
// let rollNo = student.rollNo;

// let { rollNo: roll } = student;

// console.log(roll);

//callbacks

// function funA() {
//   console.log("i am fun A");
// }

// function funB(argFun) {
//   console.log("i am fun B");
//   argFun();
// }

// funB(funA);

//three state of promise - pending,resolve,reject
// new Promise((res, rej) => {
//   res("this is my data");
//   rej("something went wrong");
//   // rej();
// })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
//   response.json().then((data) => {
//     console.log(data);
//   });
// })

async function getUserData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await response.json();

  let body = document.querySelector("body");
  let parentDiv = document.querySelector(".parent");

  data.forEach((user) => {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    let userTitle = document.createElement("h1");
    userTitle.innerText = `${user.username}`;

    cardDiv.append(userTitle);
    parentDiv.append(cardDiv);

    body.append(parentDiv);
  });
}

getUserData();
