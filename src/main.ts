import "@stylesheets/style.css";
import Board from "@/classes/Board";
import ContainerTriangle from "@/classes/ContainerTriangle";
import Point from "./classes/Point";

const board = new Board();

const containerTriangle = new ContainerTriangle();
containerTriangle.draw(board);

function triangleArea(A: Point, B: Point, C: Point) {
  return Math.abs(A.x * (B.y - C.y) + B.x * (C.y - A.y) + C.x * (A.y - B.y));
}

function isInsideTriangle(P: Point, A: Point, B: Point, C: Point) {
  const a = triangleArea(P, A, B);
  const b = triangleArea(P, B, C);
  const c = triangleArea(P, C, A);
  console.log(Math.abs(triangleArea(A, B, C) - a - b - c));

  return Math.abs(triangleArea(A, B, C) - a - b - c) <= 0.001;
}

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
