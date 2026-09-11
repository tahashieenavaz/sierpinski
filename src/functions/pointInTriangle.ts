import Point from "@/classes/Point";
import randomNumber from "./randomNumber";
import isInsideTriangle from "./isInsideTriangle";

export default function pointInTriangle(
  A: Point,
  B: Point,
  C: Point,
  x_range: number = window.innerWidth,
  y_range: number = window.innerHeight,
): Point {
  let x = randomNumber(0, x_range);
  let y = randomNumber(0, y_range);

  while (isInsideTriangle(new Point(x, y), A, B, C)) {
    x = randomNumber(0, x_range);
    y = randomNumber(0, y_range);
  }

  return new Point(x, y);
}
