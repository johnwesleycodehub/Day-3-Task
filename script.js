//! Task 1 compare two JSON objects without considering the order and without using sorting
let obj1 = { name: "person", age: 5 };
let obj2 = { age: 5, name: "person" };

let same = true;
if (Object.keys(obj1).length === Object.keys(obj2).length) {
  for (let key in obj1) {
    if (obj1[key] === obj2[key]) {
      console.log(key, "is same");
    } else {
      same = false;
      console.log(key, "is different");
    }
  }
} else {
  same = false;
  console.log("Length are different");
}
if (same) {
  console.log("JSON IS EQUAL");
} else {
  console.log("JSON IS NOT EQUAL");
}

//! Task 2 Display all the country flags from the api
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  for (var i = 0; i < result.length; i = i + 1) {
    console.log(result[i].flags.png);
  }
};

//! Task 3 Display countryname,region,subregion,population from the api
var request1 = new XMLHttpRequest();
request1.open("GET", "https://restcountries.com/v3.1/all", true);
request1.send();
request1.onload = function () {
  var data1 = request1.response;
  var result1 = JSON.parse(data1);
  for (var i = 0; i < result1.length; i = i + 1) {
    console.log(
      "Countryname:" + " " + result1[i].name.common,
      "Region:" + " " + result1[i].region,
      "Subregion:" + " " + result1[i].subregion,
      "Population:" + "" + result1[i].population
    );
  }
};
