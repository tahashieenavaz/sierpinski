export function isolate(element: HTMLCanvasElement, callback: Function) {
  const _context = element.getContext("2d");
  _context?.save();
  _context?.beginPath();
  callback(_context);
  _context?.closePath();
  _context?.restore();
}
