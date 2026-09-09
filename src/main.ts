import "@stylesheets/style.css";
import Board from "@/classes/Board";

const board = new Board();

board.isolate((context) => {
  context.strokeStyle = "black";
  context.lineWidth = 10;
  context.lineTo(innerWidth / 2, innerHeight / 2);
  context.stroke();
});
