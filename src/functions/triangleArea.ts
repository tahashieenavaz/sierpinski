import Point from "@/classes/Point";

export default function triangleArea(A: Point, B: Point, C: Point): number {
  return Math.abs(A.x * (B.y - C.y) + B.x * (C.y - A.y) + C.x * (A.y - B.y));
}
