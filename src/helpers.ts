import type { IsolateCallbackFunction } from "./typing";

export function isolate(
  element: HTMLCanvasElement,
  callback: IsolateCallbackFunction,
) {
  const _context = element.getContext("2d");
  if (!_context) {
    throw new Error("Isolate received an empty context");
  }

  _context.save();
  _context.beginPath();
  callback(_context);
  _context.closePath();
  _context.restore();
}
