import "@stylesheets/style.css";
import Board from "@/classes/Board";
import ContainerTriangle from "@/classes/ContainerTriangle";
import pointInTriangle from "@/functions/pointInTriangle";
import oneOf from "@/functions/oneOf";

const board = new Board();
const containerTriangle = new ContainerTriangle();
containerTriangle.draw(board);

let randomPoint = pointInTriangle(
  containerTriangle.A,
  containerTriangle.B,
  containerTriangle.C,
);
for (let i = 0; i < 100000; i++) {
  let randomCorner = oneOf([
    containerTriangle.A,
    containerTriangle.B,
    containerTriangle.C,
  ]);
  board.isolate((context) => {
    context.arc(randomPoint.x, randomPoint.y, 1, 0, Math.PI * 2);
    context.fillStyle = "black";
    context.fill();
  });
  randomPoint.x = (randomPoint.x + randomCorner.x) / 2;
  randomPoint.y = (randomPoint.y + randomCorner.y) / 2;
}
