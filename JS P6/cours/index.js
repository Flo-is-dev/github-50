"use strict";
// ---------
// / CANVAS
// ------------
// function draw() {
//   //Fonction en lien avec le "LOAD dessous"
//   const canvas = document.getElementById("canvas");

//   // console.log(canvas);
//   const ctx = canvas.getContext("2d");
//   //maintenant on peut mettre quelque chose à l'interieure
//   ctx.fillStyle = "rgb(200,0,0)";
//   ctx.fillRect(10, 10, 50, 50);

//   ctx.fillStyle = "rgba(0,100,200,0.5)";
//   ctx.fillRect(80, 30, 100, 50);

//   ctx.fillStyle = "rgba(100,230,20,0.5)";
//   ctx.fillRect(10, 25, 100, 100);
//   ctx.clearRect(35, 25, 40, 40);
//   //Rectangle blanc qui ne sera pas couvert
//   ctx.strokeRect(125, 75, 50, 50);
//    //Seul les lignes se déssinent

//   ctx.fillStyle = "rgba(220,130,200,0.5)";
//   ctx.beginPath();
//   //On lui dit qu'on aimerai démarrer une forme géométrique
//   ctx.moveTo(180, 150);
//   ctx.lineTo(100, 75);
//   ctx.lineTo(100, 150);
//   ctx.fill();
// }

// window.addEventListener("load", draw);
// //Dit que quand la page est chargé tu me joue la fonction Draw

// --------------
// TRY/ catch
// -------------

try {
  // Test un block de code
//   maFonction();
// } catch (err) {
//   console.log(err);
// }

// Test pour savoir si on est en JSON
function isValidJSON(txt) {
  try {
    JSON.parse(txt);
    return true;
  } catch {
    return false;
  }
}

// console.log(isValidJSON("fdsfds"));

// FINALLY
try {
  // Test un block de code
  maFonction();
} catch (err) {
  console.log(err);
} finally {
  console.log("on est arrivé au bout !");
}

// Throw (utiliser en BACK avec le node.js)
function isNumber(num) {
  if (isNaN(num)) {
    throw "Not a number"; //Le throw arret l'execution du code
  } else {
    console.log("c'est un nombre");
  }
  // plein de code
}

try {
  isNumber("2");
} catch (err) {console.log(err);}

// ----------------
// Strict Mode 
// ----------------

// Javascript plus moderne toléré,remonte plus d'erreur

// "use strict"; déclaré en haut de page
voiture = "toyota";
console.log(voiture);

