import type Board from "./Board";
import Point from "@/classes/Point";

export default class ContainerTriangle {
  A: Point;
  B: Point;
  C: Point;

  constructor(factor: number = 5) {
    const alpha = 1 / 2;
    const beta = 1 / factor;
    const gamma = 1 - 1 / factor;

    this.A = new Point(alpha * window.innerWidth, beta * window.innerHeight);
    this.B = new Point(beta * window.innerWidth, gamma * window.innerHeight);
    this.C = new Point(gamma * window.innerWidth, gamma * window.innerHeight);
  }

  draw(board: Board) {
    board.isolate((context) => {
      context.strokeStyle = "black";
      context.lineWidth = 1;

      context.moveTo(this.A.x, this.A.y);
      context.lineTo(this.B.x, this.B.y);
      context.lineTo(this.C.x, this.C.y);
      context.lineTo(this.A.x, this.A.y);
      context.stroke();
    });
  }
}
