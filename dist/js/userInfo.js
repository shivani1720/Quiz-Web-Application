let name = sessionStorage.getItem("name");
let point = sessionStorage.getItem("points");
//let time = sessionStorage.getItem("time");

document.querySelector(".name").innerHTML = name;
document.querySelector(".points").innerHTML = points;
