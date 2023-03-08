const canvas = document.getElementById("art");
const ctx = canvas.getContext("2d");

function getMousePos(e) {
  //fonction pour conaitre la position de la souris
  const rect = canvas.getBoundingClientRect(); //Pour obtenir les dimensions du rectangle avec un Canva
  // console.log(rect);
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };
}

function mouseMove(e) {
  const mousePos = getMousePos(e);
  ctx.lineTo(mousePos.x, mousePos.y);
  ctx.stroke();
  ctx.strokeStyle = "salmon";
  ctx.lineWidth = 8;
}

canvas.addEventListener("mousedown", (e) => {
  e.preventDefault(); //pour éviter le drag and drop du comportement par défaut
  const mousePos = getMousePos(e);
  ctx.beginPath();
  ctx.moveTo(mousePos.x, mousePos.y);

  canvas.addEventListener("mousemove", mouseMove);
  canvas.addEventListener("mouseup", () => {
    canvas.removeEventListener("mousemove", mouseMove); //Permet d'arreter l'execution de l'énènement
  });
});

reset.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
