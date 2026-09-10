import type Board from "./Board";

export default class ContainerTriangle {
  draw(board: Board) {
    board.isolate((context) => {
      context.strokeStyle = "black";
      context.lineWidth = 1;

      const factor = 5;
      const alpha = 1 / 2;
      const beta = 1 / factor;
      const gamma = 1 - 1 / factor;

      context.moveTo(alpha * innerWidth, beta * innerHeight);
      context.lineTo(beta * innerWidth, gamma * innerHeight);
      context.lineTo(gamma * innerWidth, gamma * innerHeight);
      context.lineTo(gamma * innerWidth, gamma * innerHeight);
      context.lineTo(alpha * innerWidth, beta * innerHeight);
      context.stroke();
    });
  }
}
