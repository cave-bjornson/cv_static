let current = location.pathname.split("/").pop().split(".")[0];
current = current ? current : "index";
console.log(current);
const currentLi = document.querySelector("#" + current);
currentLi.className = "current";
