const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// הצג ריבוע 50X50 שחור בכל מקום ב- canvas.

context.fillStyle = "black";
context.fillRect(0, 0, 50, 50);

// הצג ריבוע 70X70 צבע אדום בכל מקום ב- canvas.

context.fillStyle = "red";
context.fillRect(0, 60, 70, 70);

// צור עיגול ברדיוס 30 בצבע אדום בכל מקום ב- canvas.

context.beginPath();
context.fillStyle = "red";
context.arc(30, 200, 30, 0, 2 * Math.PI);
context.fill();

// צור עיגול ברדיוס 50 בצבע כחול בכל מקום ב- canvas.

context.beginPath();
context.fillStyle = "blue";
context.arc(50, 300, 50, 0, 2 * Math.PI);
context.fill();

// צור 2 עיגולים ברדיוס 40 בצבע ירוק בכל מקום ב- canvas.

context.beginPath();
context.fillStyle = "green";
context.arc(250, 40, 40, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.fillStyle = "green";
context.arc(150, 40, 40, 0, 2 * Math.PI);
context.fill();

//? צור 3 מרובעים במקומות שונים כל חצי שנייה יתקדמו 20 קדימה.

// let step = 0;
// setInterval(() => {
//   context.clearRect(310 + step, 10, 100, 100);
//   context.clearRect(500 + step, 200, 100, 100);
//   context.clearRect(50 + step, 400, 100, 100);

//   step += 20;

//   context.fillStyle = "purple";

//   context.fillRect(310 + step, 10, 100, 100);
//   context.fillRect(500 + step, 200, 100, 100);
//   context.fillRect(50 + step, 400, 100, 100);

// }, 500);

// צור אובייקט של רצפה והצג אותו על ה-canvas כרצפה.

const floor = {
  x: 0,
  y: canvas.height - 100,
  width: canvas.width,
  height: 100,
};
context.fillStyle = "black";
context.fillRect(floor.x, floor.y, floor.width, floor.height);

// צור אובייקט של שחקן - והצג אותו על ה- canvas ברצפה מהשאלה הקודמת.

const player = {
  x: 420,
  y: canvas.height - 250,
  width: 50,
  height: 150,
};
context.fillStyle = "pink";
context.fillRect(player.x, player.y, player.width, player.height);

// צור פונקציית jump לשחקן שבעת לחיצה על מקש החץ העליון יקפוץ ב- 10 ויחזור.

const jump = () => {
  context.clearRect(player.x, player.y, player.width, player.height);
  context.fillStyle = "pink";
  player.y -= 10;
  context.fillRect(player.x, player.y, player.width, player.height);
  setTimeout(() => {
    context.clearRect(player.x, player.y, player.width, player.height);
    player.y += 10;
    context.fillRect(player.x, player.y, player.width, player.height);
  }, 300);
};

document.addEventListener("keyup", keyUpHandler, false);
function keyUpHandler(e) {
  if (e.key === "ArrowUp") {
    jump();
  }
}

// צור 10 ריבועים במיקומים שונים(באופן רנדומלי, יש לוודא שהם לא יוצאים מהמסך).

for (let index = 0; index < 10; index++) {
  context.fillStyle = "white";
  context.fillRect(
    50 + Math.random() * canvas.width - 50,
    50 + Math.random() * canvas.height - 50,
    50,
    50
  );
}
