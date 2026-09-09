type IsolateCallbackFunction = (
  context: CanvasRenderingContext2D | null,
) => void;

export function isolate(
  element: HTMLCanvasElement,
  callback: IsolateCallbackFunction,
) {
  const _context = element.getContext("2d");
  _context?.save();
  _context?.beginPath();
  callback(_context);
  _context?.closePath();
  _context?.restore();
}
