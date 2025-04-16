
let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

function startGame(level) {
  document.querySelector(".menu").style.display = "none";
  canvas.style.display = "block";

  ctx.fillStyle = "#aaf";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#000";
  ctx.font = "24px Arial";
  ctx.fillText("بدأت اللعبة - المستوى: " + level, 200, 200);
}
