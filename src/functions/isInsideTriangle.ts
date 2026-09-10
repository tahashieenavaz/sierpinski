import Point from "@/classes/Point";
import triangleArea from "./triangleArea";

export default function isInsideTriangle(
  P: Point,
  A: Point,
  B: Point,
  C: Point,
) {
  const a = triangleArea(P, A, B);
  const b = triangleArea(P, B, C);
  const c = triangleArea(P, C, A);
  return Math.abs(triangleArea(A, B, C) - a - b - c) <= 0.001;
}
