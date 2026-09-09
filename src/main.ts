import "@stylesheets/style.css";
import Board from "@/classes/Board";

const board = new Board();

board.isolate((context: CanvasRenderingContext2D) => {
  context.lineTo(10, 10);
  context.stroke();
});
