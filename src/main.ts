import "@stylesheets/style.css";
import Board from "@/classes/Board";

const board = new Board();

board.isolate((context: CanvasRenderingContext2D) => {
  context.strokeStyle = "black";
  context.lineTo(innerWidth / 2, innerHeight / 2);
  context.lineWidth = 2;
  context.stroke();
});
