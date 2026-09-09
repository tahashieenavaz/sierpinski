export default class Board {
  element: HTMLCanvasElement = document.createElement("canvas");

  constructor() {
    this.resizeCanvasElement();
  }

  resizeCanvasElement() {
    this.element.width = innerWidth;
    this.element.height = innerWidth;
  }
}
