// Rappel des types de données
let string = "chain";
let number = 25;
let boolean = true;
let maVariable; //Undefined

// Tableaux
let array = ["Bordeaux", "Toulouse", "Nantes"];

// console.log(array);
// console.log(array[2]);
// console.log(array[2][3]);

let array2 = ["Bordeaux", 24, true, [1, 2], { nom: "denis" }];
// Un tableaux peut contenir toute sorte de types de données
// console.log(array2[4].nom);
// pour se balader dans un objet on utilise le point "."

let objet = {
  pseudo: "Denis",
  age: 33,
  Technos: ["Javascript", "React", "NodeJs"],
  Admin: false,
  // index: valeur
};

// console.log(objet.Technos[1]);  Pour se balader dans l'objet
objet.adresse = "22 rue du code"; //JS ajoute cet info dans l'objet

// ************  On stock les objets dans des tableaux ***********

let data = [
  {
    pseudo: "Denis",
    age: 33,
    Technos: ["Javascript", "React", "NodeJs"],
    Admin: false,
  },
  {
    pseudo: "Samia",
    age: 24,
    Technos: ["Javascript", "React", "CSS"],
    Admin: false,
  },
  {
    pseudo: "Nicolas",
    age: 42,
    Technos: ["Javascript", "React", "PHP"],
    Admin: true,
  },
];

// console.log(data[2].pseudo);

// ********************************
// Les structures de controle
// *********************************

if (data[0].age > data[1].age) {
  // console.log(data[0].pseudo + " est plus agé que" + data[1].pseudo);
} else {
  // valeur si faux
}

// 2 ) if (valeur à tester) valeur si vrai

// 3 ) valeur à tester ? si vrai : si faux

// While
let w = 0;

while (w < 10) {
  w++;
  // console.log("La valeure de w est de : " + w);
}

// Do while
let d = 0;

do {
  d++;
  // console.log(d);
} while (d < 5);

// *******************
// Les boucles for
// facon 1
for (const user of data) {
  // document.body.innerHTML += `<li> ${user.pseudo} - ${user.age} ans</li>`;
}

// facon 2

// on délcare la valeur de i / jusqu'ou on boucle / on incrémente i si la condition 2 n'est pas remplie
for (i = 0; i < data.length; i++) {
  // console.log(data[i].Technos[2]);
  // document.body.innerHTML += "<h2>" + data[i].pseudo + "</h2>";
}

document.body.addEventListener("click", (e) => {
  console.log(e.target.id);

  switch (e.target.id) {
    case "javascript":
      document.body.style.background = "yellow";
      break;
    case "php":
      document.body.style.background = "violet";
      break;
    case "python":
      document.body.style.background = "blue";
      break;
    default:
      null;
  }
});

// ********************************
// Méthodes String
// ********************************
let string2 = "Javascript est un langage orienté objet";

// console.log(string2.length);
// console.log(string2[string2.length - 1]);

// console.log(string2.indexOf("langage")); Pour savoir a quel index tu as cette chose là

// let newString = string2.slice(5, 17);
// console.log(newString); Permet de découper manuellement

// console.log(string2.split(" "));Permet de coupé à chaque espace

// console.log(string2.toLocaleLowerCase()); tout remttre en minuscule
// console.log(string2.toUpperCase());

// console.log(string2.replace("Javascript", "php")); Pour remplacer un mot par un autre

// ********************************
// Méthodes Numbers
// ********************************

let number2 = 42.1234;
let numberString = "42.12 est un chiffre";

// console.log(number2.toFixed(2)); 2 chiffre après la virgule
// console.log(parsInt(numberString)); Il prend le premier chiffre trouvé dans la phrase , ici "42"
// console.log(parseFloat(numberString)); il garde la virgule

// *************
// Math
// *****************
console.log(Math.PI);
// console.log(Math.round(4.5)); arrondie
// console.log(Math.floor(4.9)); arrondie au plus bas
// console.log(Math.ceil(4.1)); arrondie au plus haut
// Math.pow(2,7) pour les puissances

// console.log(Math.random() * 50); done un chiffre random entre 0 et 50
// console.log(Math.floor(Math.random() * 50)); donne une chiffre random mais arrondie au floor

// --------------------------
// Méthodes Arrays - Tableaux
// --------------------------
let array3 = ["Javascript", "Php", "Python"];
let array4 = ["Ruby", "Solidity"];

// Pour fusionner les 2 tableaux
// let newArray = array3.concat(array4);
// console.log(newArray);

// Ou aussi**** méthode préféré <3
// let newArray = [...array3, ...array4];
// console.log(newArray);

// console.log(array3.join("_")); Permet de cassé la tableau avec le texte de notre choix

// console.log(array3.slice(1,4)); Prend le tableau de 1 à 4

// console.log(array3.indexOf("Python")); Va me chercher Python dans le tableau!

// array3.forEach((language) => console.log(language)); Permet d'énumérer les choses une par une

// console.log(array3.every((language) => language == "Php")); *rend true*  pour tester si dans chacun de ses éléements il y a PHP?
// console.log(array3.some((language) => language == "Php")); pour une seul parmit eux

// let shift = array3.shift(); Pour enelvé le premier élément du tableau
// console.log(array3);

// console.log(array3.pop()); retire le dernier élement du tableau

// const restArray = array3.splice(1, 1, "C++"); pour remplacer l'élement 1 par C++
// console.log(array3);

// ***IMPORTANT***
let arrayNumber = [4, 74, 28, 12, 1];
// console.log(arrayNumber.reduce((x, y) => x + y));  Permet d'additionner tout la tableau

// arrayNumber.push(88); pour ajouter une info à un tableau
// console.log(arrayNumber);

//FILTER - SORT - MAP

// console.log(arrayNumber.filter((number) => number > 10)); donne que les nb supérierues à 10

// console.log(arrayNumber.sort()); permet de ranger par ordre alpha ou par ordre numéro
// console.log(arrayNumber.sort((a, b) => b - a)); Pour ranger du plus grand u plus petit ou inversement avec a - b

// arrayNumber.map((number) => console.log(number)); pour lister
// EXEMPLE
// arrayNumber.map(
//   (number) => (document.body.innerHTML += `<li> ${number} </li>`)
// ); lister les infos sous liste à puce

//*** */ OU autre rédaction svt utilisé avec "join" pour enlevé les virgules
// document.body.innerHTML = arrayNumber
//   .map((number) => `<li>${number} </li>`)
//   .join("");

// ---------------------
// Méthodes Objects
// ------------------------
document.body.innerHTML = data
  // .filter((user) => user.Admin === false)
  .filter((user) => user.pseudo.includes("a"))
  .sort((a, b) => b.age - a.age)
  .map(
    (user) =>
      `
<div class="user-card">
<h2>${user.pseudo}</h2>
<p>Age : ${user.age}</p>
<p>Status : ${user.Admin ? "Modérateur" : "Membre"}</p>

</div>
`
  )
  .join("");

// ---------------------
// Les dates (3 principaux formats)
// ------------------------

// ***Dates classique****
let date = new Date();

// console.log(date);

// ***Timestamp***
let timestamp = Date.parse(date);
// console.log(timestamp);

// ***IsoString***
let iso = date.toISOString();
// console.log(date.toISOString());

function dateParser(chaine) {
  let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return newDate;
}

// console.log(dateParser(date));
// console.log(dateParser(timestamp));
// console.log(dateParser(iso));

// ---------------------
// Destructuring
// ------------------------

let moreData = {
  destVar: ["Element1", "Element 2"],
};

const { destVar } = moreData;
// const destVar = moreData.destVar  égale à au dessus

// console.log(moreData.destVar[0]);
// console.log(destVar);

let array5 = [70, 80, 90];

let [x, y, z] = array5;

// console.log(x);
// console.log(y);
// console.log(z);

const dateDestructuring = (chaine) => {
  let newDate = chaine.split("T")[0];
  // console.log(newDate.split("-"));
  let [y, m, d] = newDate.split("-");
  return [d, m, y].join("/");
  // console.log(newDate);
};

// console.log(dateDestructuring(iso));

// ---------------------
// Les datastes (données qu'on peut mettre dans les balises)
// ------------------------

const h3js = document.getElementById("javascript");
// console.log(h3js.dataset.lang);

const h3 = document.querySelectorAll("h3");

// h3.forEach((language) => console.log(language.dataset.lang));

// ---------------------
// Les Regex (les expression régulière pour tester les chaines de caractères)
// ------------------------

let mail = "from_scratch33@gmail.com";
// console.log(mail.search(/frscceeceom/)); renvoi 0 ou -1

// console.log(mail.replace(/from/, "de"));

// console.log(mail.match(/SCratch/i)); renvoi null si faux et (i permet de fait abstractiond des majuscules)
// console.log(mail.match(/[zug]/));

// Tousles chiffres
// console.log(mail.match(/\d/));

// Matcher toutes les lettres, si lettre c'est bon ca marche
// console.log(mail.match(/[a-z]/));

// ***********Pour controler un mail***********

// console.log(mail.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i));

let separator = 24568521;

// console.log(separator.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));
