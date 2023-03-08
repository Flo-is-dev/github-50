let item;
// On attrape un élément qu'on identifie et qu'on stock dans la boite "item"
document.addEventListener("dragstart", (e) => {
  item = e.target;
});
// On se prémunie contre son comprotement par défaut
document.addEventListener("dragover", (e) => {
  e.preventDefault();
});
// Drop l'item au bon endroit
document.addEventListener("drop", (e) => {
  // console.log("yes");
  if (e.target.getAttribute("data-draggable") == "target") {
    e.preventDefault(e);
    // console.log(e.target);
    // Méthode qui dit que je veux que cet element soit l'enfant de cet element
    e.target.appendChild(item);
  }
});
// Eviter certain bug, rare pb, on vide donc item
document.addEventListener("dragend", (item = null));
