import "@stylesheets/style.css";
import Board from "@/classes/Board";
import ContainerTriangle from "@/classes/ContainerTriangle";
import pointInTriangle from "@/functions/pointInTriangle";

const board = new Board();
const containerTriangle = new ContainerTriangle();
containerTriangle.draw(board);
const point = pointInTriangle(
  containerTriangle.A,
  containerTriangle.B,
  containerTriangle.C,
);

board.isolate((context) => {
  context.arc(point.x, point.y, 1, 0, Math.PI * 2);
  context.fillStyle = "black";
  context.fill();
});
