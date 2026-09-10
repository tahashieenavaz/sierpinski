import "@stylesheets/style.css";
import Board from "@/classes/Board";
import ContainerTriangle from "@/classes/ContainerTriangle";

const board = new Board();

const containerTriangle = new ContainerTriangle();
containerTriangle.draw(board);
