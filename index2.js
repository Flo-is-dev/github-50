const btn1 = document.querySelector("#btc1");
const btn2 = document.querySelector("#btc2");
const btn3 = document.querySelector("#btc3");
const backDiv = document.querySelector("div");

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
