// selecteurs
// document.querySelector("h4").style.background = "yellow";

// const baliseHTML = document.querySelector("h4");
// console.log(baliseHTML);
// baliseHTML.style.background = "yellow";

// Click event
const questionContainer = document.querySelector(".click-event");
// console.log(questionContainer); (pour le test)
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
// console.log(btn1, btn2);
const response = document.querySelector("p");

questionContainer.addEventListener("click", () => {
  // console.log("click !");
  questionContainer.classList.toggle("question-click");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

//  <div> > #id > .class > baliseHTML
// *******************************************

// Mouse Events
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  // console.log("mouseout !!");
  questionContainer.style.background = "orange";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

// ***********************************************************************
// Key Press event

// 1 - on déclare les variables
const keypressContainer = document.querySelector(".keypress");
// console.log(keypressContainer);
const key = document.getElementById("key");

// 2 - on déclare les fonctions
const ring = () => {
  const audio = new Audio();
  audio.src = "./cours_z.mp3";
  audio.play();
};

// 3 - on fait la logique

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  if (e.key === "j") {
    keypressContainer.style.background = "blue";
  } else if (e.key === "h") {
    keypressContainer.style.background = "brown";
  } else {
    keypressContainer.style.background = "green";
  }
  // ring();
});

// ***************************************************
// scroll event

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  // console.log(window.scrollY);

  if (window.scrollY > 120) {
    nav.style.top = "-50px";
  } else nav.style.top = 0;
});

// *************************************************************
// Input Event, Form Event
const inputName = document.querySelector('input[type="texte"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // pour se prémunir du comportement par défaut du navigateur qui relance une nouvelle page après qu'on ait appuyer sur "valider"
  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
    <h3>Pseudo : ${pseudo}</h3>
    <h4>Langage préféré : ${language}</h4>
    `;
  } else {
    alert("Veuillez accepter les CGV");
  }
});
// innerHTML permet d'injecter de l'HTML et d'avoir un text en forme et non une simple ligne de texte

// ****************************************************
// Load Event - pour charger des choses au chargmeent de la page
window.addEventListener("load", () => {
  console.log("Document chargé");
});

// **********************************************************
// ForEach (pour cibler chacune des boxes)

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.style.transform = "scale(0.7)";
  });
});

// *****************************************************
// addEventListener Vs Onclick
// Onclick peut etre directement utilisé dans HTML mais a éviter
// document.body.onclick = function () {
//   console.log("click");
// };

// Bubbling => fin (de base l'eventlistner est paramétré en mode bubling)
document.body.addEventListener(
  "click",
  () => {
    console.log("click 1 !");
  },
  false
);

// Usecapture, permet de passé avant tous les Events de la page
document.body.addEventListener(
  "click",
  () => {
    console.log("click 2 !");
  },
  true
);

// ******************************************************
//  Stop propagation
// questionContainer.addEventListener("click", (e) => {
//   alert("test !");
//   e.stopPropagation();
// });

// removeEventListener existe pour retirer addEventListener

// ***********************************************************
// BOM

// console.log(window.innerHeight);
// console.log(window.scrollY);
// window.open("http://google.com", "cours js", "height=600, width=800");
// permet de créer une POP UP type formulaire d'inscription
// window.close(),

// Evenements adossés à Window
// alert("hello");

// confirm
btn2.addEventListener("click", () => {
  confirm("voulez vous vraiement vous tromper ?");
});

// prompt
let answer;

btn1.addEventListener("click", () => {
  answer = prompt("entrez votre nom !");
  questionContainer.innerHTML += "<h3>Bravo " + answer + "</h3>";
  // = ou += pour ajouter à la page
});

// Timer, compte à rebours
setTimeout(() => {
  questionContainer.style.borderRadius = "300px";
}, 2000);

// let interval = setInterval(() => {
//   document.body.innerHTML +=
//     "<div class='box'> <h2>Nouvelle boite !</h2></div>";
// }, 1000);

document.body.addEventListener("click", () => {
  // e.target.remove(); -permet de supprimer un element du DOM au click
  clearInterval(interval);
});

// Location
// console.log(location.href); montre le lien exacte ou nous sommes
// console.log(location.host); avoir juste le nom du site
// console.log(location.pathname);
// console.log(location.search);
// location.replace("http://lequipe.fr"); (redirige vers un autre lien)

// window.onload = () => {
//   location.href = "http://twitter.fr";
// };

// Navigator
// console.log(navigator.userAgent); avoir des infos sur le navigator

// Geocalisation

// History
// console.log(window.history);
// window.history.back();
//history.go(-2)  reviens en arrière aussi loin qu'on le souhaite

// *********************************************************
// setProperty
window.addEventListener("mousemove", (e) => {
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--y", e.layerY + "px");
});
