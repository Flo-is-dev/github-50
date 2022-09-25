// XMLHttpRequest

function reqListener() {
  console.log(this.responseText);
}

// let req = new XMLHttpRequest();
// req.onload = reqListener;
// // req.open("get", "data.txt", true);
// // req.open("get", "data.json", true);
// req.open("get", "https://api.blablagues.net/?rub=blagues", true);
// req.send();

// *****************
// FETCH
// *****************
// THEORIE
// fetch("monlien", "object d'options si il y a besoin")
//   .then((response) => {
//     console.log(response); on interprete la response
//   })
//   // .catch((err) => console.log(err));  log moi l'erreur si il y a un pb

fetch("data.txt").then((res) => res.text());
// .then((data) => console.log(data));

fetch("data.json").then((res) => res.json());
// .then((data) => console.log(data));

const myHeaders = new Headers();

const init = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};

// fetch("data.json", init).then((res) => console.log(res));

//CRUD => Create (POST), read (GET), update (PUT), Delete(DELETE)

const init2 = {
  method: "POST",
  headers: {
    "content-Type": "application/json",
  },
  body: JSON.stringify({
    pseudo: "From Scratch",
    message: "Yo les gens !",
  }),
  mode: "cors",
  credentials: "same-origin",
};

document.querySelector("form"),
  addEventListener("submit", () => {
    fetch("http://localhost:3000/posts", init2).then(() =>
      console.log("data envoyé")
    );
  });

// ********************
// Asynchrone - pouvoir executer du code et dire a javascript d'attendre avant d'executer
// *********************

setTimeout(() => {
  console.log("test");
}, 2000);

// Promise
// fetch("monlien").then((res) => res.xxx);

// async/await
async function fetchData() {
  await fetch("monlien");
  // attend que le await soit executé avant de faire la suite
  await executefonction();
  await console.log("coucou");
}

const fetData2 = async () => {
  await fetch("monlien");
  // attend que le await soit executé avant de faire la suite

  executefonction();
};

// **********************
// Le JSON
// **********************

//  Méthode .json() => méthode qui s'auto-résout en renvoyant le Body de la requet (et pas le corps)

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    // stringify il convertit en JSON
    let settings = JSON.stringify(data);
    // console.log(settings);
    // Parse => transofrme json en objet JS

    // console.log(JSON.parse(settings));
  });

// ************
// Web API
// **************

// Client storage
// -----------------

// Local Storage
localStorage.data = "Je stock la data";
// console.log(localStorage.data); //On récupère l'info stockée

localStorage.removeItem("data");

const obj = {
  name: "denis",
  age: 22,
};
// Il faut passer des chaines de caractères
localStorage.user = JSON.stringify(obj);

// console.log(localStorage.user);
// console.log(JSON.parse(localStorage.user));

// Exo Todolist pour appronfidur le local storage

// **********
// Session Storage - là que le temps de la session

sessionStorage.dataSettings = "55px";
// console.log(sessionStorage.dataSettings);
sessionStorage.clear;

// **************
// Cookies
document.cookie = "username=FromScratch";

// Bonne pratique
document.cookie = "Pseudo=FS;path=/;max-age=450000;secure;samesite";
