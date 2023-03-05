let rgba = document.querySelector(".rgba");
let body = document.querySelector("body");

let interval = setInterval(() => {
  let x = Math.floor(195 + Math.random() * 60);
  let y = Math.floor(195 + Math.random() * 60);
  let z = Math.floor(195 + Math.random() * 60);
  // let rgb = (x, y, z);
  body.style.background = `rgb( ${x} , ${y} , ${z} )`;
  rgba.innerHTML = `rgb( ${x} , ${y} , ${z} )`;
}, 1000);
