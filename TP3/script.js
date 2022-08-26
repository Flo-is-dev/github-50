// Créer un événement au scroll

const nav = document.querySelector("nav");

window.addEventListener("scroll", (e) => {
  console.log(scrollY);
  if (window.scrollY < 200) {
    nav.style.height = "90px";
  } else nav.style.height = "50px";
});

// Réduire la navbar quand on descend vers le bas, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

const img = document.querySelector("#imgImprovise");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    img.style.opacity = 1;
    img.style.transform = "none";
  }
});

// Faire apparaitre la popup quand on est en bas du site

const pop = document.querySelector(".pop-up");

window.addEventListener("scroll", () => {
  if (window.scrollY > 1100) {
    pop.style.opacity = 1;
    pop.style.transform = "none";
  }
});

// Bonus : quand on clicke sur la popup elle disparait pour toujours

const cross = document.querySelector("#closeBtn");

cross.addEventListener("click", () => {
  pop.style.opacity = 0;
  pop.style.transform = "translateX(400px)";
  pop.style.visibility = "hidden";
});
