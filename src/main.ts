import "@stylesheets/style.css";
import Board from "@/classes/Board";
import ContainerTriangle from "@/classes/ContainerTriangle";
import pointInTriangle from "@/functions/pointInTriangle";
import oneOf from "@/functions/oneOf";

const board = new Board();
const containerTriangle = new ContainerTriangle();
containerTriangle.draw(board);

const randomPoint = pointInTriangle(
  containerTriangle.A,
  containerTriangle.B,
  containerTriangle.C,
);
const randomCorner = oneOf([
  containerTriangle.A,
  containerTriangle.B,
  containerTriangle.C,
]);
board.isolate((context) => {
  context.arc(randomPoint.x, randomPoint.y, 1, 0, Math.PI * 2);
  context.fillStyle = "black";
  context.fill();
});
board.isolate((context) => {
  context.moveTo(randomPoint.x, randomPoint.y);
  context.lineTo(randomCorner.x, randomCorner.y);
  context.stroke();
});
