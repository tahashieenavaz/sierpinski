export default class Board {
  element: HTMLCanvasElement = document.createElement("canvas");

  constructor() {
    this.resizeCanvasElement();
    this.setCanvasElementEvents();
  }

  resizeCanvasElement() {
    this.element.width = innerWidth;
    this.element.height = innerWidth;
  }

  setCanvasElementEvents() {
    window.addEventListener("resize", this.resizeCanvasElement);
  }
}
