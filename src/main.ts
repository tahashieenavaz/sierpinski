import "@stylesheets/style.css";
import Board from "@/classes/Board";
import ContainerTriangle from "@/classes/ContainerTriangle";
import Point from "./classes/Point";
import isInsideTriangle from "@/functions/isInsideTriangle";

const board = new Board();
const containerTriangle = new ContainerTriangle();
containerTriangle.draw(board);

window.addEventListener("mousemove", (e) => {
  const P = new Point(e.x, e.y);
  if (
    isInsideTriangle(
      P,
      containerTriangle.A,
      containerTriangle.B,
      containerTriangle.C,
    )
  ) {
    document.body.style.background = "red";
  } else {
    document.body.style.background = "black";
  }
});
