const btn1 = document.querySelector("#btc1");
const btn2 = document.querySelector("#btc2");
const btn3 = document.querySelector("#btc3");
const backDiv = document.querySelector("section");

btn1.addEventListener("click", () => {
  backDiv.style.transition = "0.3s ease";
  backDiv.style.background = "lightpink";
});

btn2.addEventListener("click", () => {
  backDiv.style.width = "400px";
  backDiv.style.transition = "0.3s ease";
  btn1.style.transition = "0.05s";
  btn3.style.visibility = "visible";
  backDiv.style.background = "aqua";
  btn3.style.position = "relative";
  btn2.style.scale = "1";
  btn1.style.visibility = "visible";
  btn2.style.transform = " translateX(0px)";
});

btn3.addEventListener("click", () => {
  backDiv.style.transition = "0.3s ease";
  btn2.style.transition = "0.3s ease";
  btn1.style.visibility = "hidden";
  btn2.style.transform = "translateX(-80px)";
  backDiv.style.background = "rgb(107, 250, 164)";
});

// ********Mouse Event**************
const mousemove = document.querySelector(".mousemove");
const mousemove2 = document.querySelector(".mousemove2");
const mousemove3 = document.querySelector(".mousemove3");

window.addEventListener("mousemove", (e) => {
  // console.log("mouse bien");
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
  mousemove2.style.left = e.pageX + "px";
  mousemove2.style.top = e.pageY + "px";
  mousemove3.style.left = e.pageX + "px";
  mousemove3.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(1.2) translate(-40%, -40%)";
  mousemove2.style.transform = "scale(1.2) translate(-40%, -40%)";
  mousemove3.style.transform = "scale(1.2) translate(-40%, -40%)";
});

btn3.addEventListener("mousedown", () => {
  mousemove.style.border = "1px solid rgb(25, 210, 127)";
  mousemove2.style.border = "1px solid rgb(78, 242, 168)";
  mousemove3.style.border = "1px solid rgb(118, 242, 186)";
  mousemove3.style.background = "rgba(118, 242, 186, 0.204)";
});

btn1.addEventListener("mousedown", () => {
  mousemove.style.border = "1px dashed red";
  mousemove2.style.border = "1px solid pink";
  mousemove3.style.border = "1px solid lightpink";
  mousemove3.style.background = "rgba(255, 192, 203, 0.237)";
});

btn2.addEventListener("mousedown", () => {
  mousemove.style.border = "1px dashed blue";
  mousemove2.style.border = "1px solid aqua";
  mousemove3.style.border = "1px solid lightblue";
  mousemove3.style.background = "rgba(116, 223, 255, 0.327)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove2.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove3.style.transform = "scale(1) translate(-50%, -50%)";
  // mousemove.style.border = "1px dashed red";
  // mousemove2.style.border = "1px solid pink";
  // mousemove3.style.border = "1px solid lightpink";
  // mousemove3.style.background = "rgba(255, 192, 203, 0.237)";
});

backDiv.addEventListener("mouseenter", () => {
  backDiv.style.opacity = "0.2";
});
backDiv.addEventListener("mouseout", () => {
  backDiv.style.opacity = "1";
});
