/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
   arr.map((student) => {
    if (student.profession === "developer") {
      console.log(student);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((student) => {
    if (student.profession === "developer") {
      console.log(student);
    }
  });
}

function addData() {
  //Write your code here, just console.log
   arr.push( {id:4,name:"susan",age:"20",profession:"intern"} );
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter((student) => student.profession !== "admin");
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
    let newArr = [
    { id: 5, name: "alice", age: "21", profession: "designer" },
    { id: 6, name: "bob", age: "23", profession: "manager" },
    {id:7,name:"laddle",age:"20",profession:"intern"}, 
  ];
  let concatenatedArr = arr.concat(newArr);
  console.log(concatenatedArr);
}
